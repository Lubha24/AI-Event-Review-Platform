const express = require('express');
const router = express.Router();
const db = require('../db'); // Import database connection
const bcrypt = require('bcryptjs'); // For password hashing

// GET / - Fetch all users
router.get('/', async (req, res) => {
  try {
    const [users] = await db.query('SELECT * FROM users');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /:id - Fetch a single user by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [user] = await db.query('SELECT * FROM users WHERE id = ?', [id]);

    if (user.length === 0) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.json(user[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST / - Create a new user
router.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  // Validate input
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Check if user already exists
    const [existingUser] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert new user into the database
    const insertUserQuery =
      'INSERT INTO users (name, email, password, role, created_at) VALUES (?, ?, ?, "user", NOW())';
    const [results] = await db.query(insertUserQuery, [name, email, hashedPassword]);

    res.status(201).json({ message: 'User created successfully.', userId: results.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /:id - Update an existing user
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  // Validate input
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required.' });
  }

  try {
    // Check if user exists
    const [user] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    if (user.length === 0) {
      return res.status(404).json({ message: 'User not found.' });
    }

    let hashedPassword = user[0].password; // Keep the existing password by default

    // If a new password is provided, hash it
    if (password) {
      const salt = await bcrypt.genSalt(10);
      hashedPassword = await bcrypt.hash(password, salt);
    }

    // Update user in the database
    const updateUserQuery =
      'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?';
    await db.query(updateUserQuery, [name, email, hashedPassword, id]);

    res.json({ message: 'User updated successfully.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /:id - Delete a user
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Check if user exists
    const [user] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    if (user.length === 0) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Delete user from the database
    await db.query('DELETE FROM users WHERE id = ?', [id]);

    res.json({ message: 'User deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; // Export the router