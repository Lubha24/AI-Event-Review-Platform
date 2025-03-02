const express = require('express');
const router = express.Router();
const db = require('../db'); // Import database connection
const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing

// POST /register - Register a new user
router.post('/register', async (req, res) => {
  console.log('📩 Received registration request:', req.body); // Log the request body

  const { name, email, password } = req.body;

  // Validate input
  if (!name || !email || !password) {
    console.log('⚠️ Validation failed: Missing fields');
    return res.status(400).json({ message: 'All fields are required.' });
  }

  console.log('✅ Input validation passed'); // Log validation success

  // Check if user already exists
  const checkUserQuery = 'SELECT * FROM users WHERE email = ?';
  console.log('🔍 Checking if user exists...'); // Log before database query
  db.query(checkUserQuery, [email], async (err, results) => {
    if (err) {
      console.error('❌ Error checking user:', err.sqlMessage || err); // Log database error
      return res.status(500).json({ message: 'Database error: ' + (err.sqlMessage || 'An error occurred.') });
    }

    console.log('🛠 User check results:', results); // Log the results of the query

    if (results.length > 0) {
      console.log('⚠️ User already exists:', email); // Log duplicate user
      return res.status(400).json({ message: 'User already exists.' });
    }

    console.log('🆕 User does not exist, proceeding to hash password...'); // Log before hashing

    try {
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      console.log('🔑 Password hashed successfully'); // Log password hashing

      // Insert new user into the database
      const insertUserQuery =
        'INSERT INTO users (name, email, password, role, created_at) VALUES (?, ?, ?, "user", NOW())';
      console.log('📤 Inserting user into database...'); // Log before insertion

      db.query(insertUserQuery, [name, email, hashedPassword], (err, results) => {
        if (err) {
          console.error('❌ Error inserting user:', err.sqlMessage || err); // Log insertion error
          return res.status(500).json({ message: 'Database error: ' + (err.sqlMessage || 'An error occurred.') });
        }

        console.log('✅ User inserted successfully:', results); // Log successful insertion
        res.status(201).json({ message: 'User registered successfully.' });
      });
    } catch (error) {
      console.error('❌ Error hashing password:', error); // Log bcrypt error
      res.status(500).json({ message: 'An error occurred while processing your request.' });
    }
  });
});

// POST /login - Log in an existing user
router.post('/login', async (req, res) => {
  console.log('📩 Received login request:', req.body); // Log the request body

  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    console.log('⚠️ Validation failed: Missing fields');
    return res.status(400).json({ message: 'All fields are required.' });
  }

  console.log('✅ Input validation passed'); // Log validation success

  // Check if user exists
  const checkUserQuery = 'SELECT * FROM users WHERE email = ?';
  console.log('🔍 Checking if user exists...'); // Log before database query
  db.query(checkUserQuery, [email], async (err, results) => {
    if (err) {
      console.error('❌ Error checking user:', err.sqlMessage || err); // Log database error
      return res.status(500).json({ message: 'Database error: ' + (err.sqlMessage || 'An error occurred.') });
    }

    console.log('🛠 User check results:', results); // Log the results of the query

    if (results.length === 0) {
      console.log('⚠️ User not found:', email); // Log user not found
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    const user = results[0];

    // Compare passwords
    console.log('🔑 Comparing passwords...'); // Log before password comparison
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      console.log('⚠️ Invalid password for user:', email); // Log invalid password
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    console.log('✅ Login successful for user:', email); // Log successful login
    res.status(200).json({ message: 'Login successful.', user });
  });
});

module.exports = router; // Export the router