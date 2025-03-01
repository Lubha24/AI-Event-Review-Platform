const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db'); // Database connection
const bcrypt = require('bcryptjs'); // Add bcrypt for password hashing

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const eventRoutes = require('./routes/events');
const userRoutes = require('./routes/users');
const reviewRoutes = require('./routes/reviews');
const recommendationRoutes = require('./routes/recommendations');

// Ensure these are Express routers before using them
app.use('/events', eventRoutes);
app.use('/users', userRoutes);
app.use('/reviews', reviewRoutes);
app.use('/recommendations', recommendationRoutes);

// Test Route
app.get('/', (req, res) => {
    res.send('Server is running...');
});

// Registration Endpoint
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  // Validate input
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Check if user already exists
  const checkUserQuery = 'SELECT * FROM users WHERE email = ?';
  db.query(checkUserQuery, [email], async (err, results) => {
    if (err) {
      console.error('Error checking user:', err);
      return res.status(500).json({ message: 'An error occurred.' });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert new user into the database
    const insertUserQuery =
      'INSERT INTO users (name, email, password, role, created_at) VALUES (?, ?, ?, "user", NOW())';
    db.query(
      insertUserQuery,
      [name, email, hashedPassword],
      (err, results) => {
        if (err) {
          console.error('Error inserting user:', err);
          return res.status(500).json({ message: 'An error occurred.' });
        }

        res.status(201).json({ message: 'User registered successfully.' });
      }
    );
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});