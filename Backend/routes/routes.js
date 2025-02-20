const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'event_review_db',
});

// Events Route: GET all events
router.get('/events', (req, res) => {
  db.query('SELECT * FROM event', (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching events' });
    }
    res.status(200).json(results);
  });
});

// Reviews Route: GET all reviews for a specific event
router.get('/reviews/:eventId', (req, res) => {
  const eventId = req.params.eventId;
  db.query('SELECT * FROM reviews WHERE event_id = ?', [eventId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching reviews' });
    }
    res.status(200).json(results);
  });
});

// User Route: Register a new user
router.post('/users/register', (req, res) => {
  const { name, email, password } = req.body;
  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error registering user' });
    }
    res.status(201).json({ message: 'User registered successfully' });
  });
});

module.exports = router;
