const express = require('express');
const router = express.Router();
const db = require('../db'); // Database connection

// Route to get all reviews
router.get('/', async (req, res) => {
    try {
        // Using Promise-based query from mysql2/promise
        const [reviews] = await db.query('SELECT * FROM reviews');
        res.json(reviews); // Send the reviews data as JSON response
    } catch (err) {
        console.error('Error fetching reviews:', err); // Log the error
        res.status(500).json({ error: err.message }); // Respond with error message
    }
});

module.exports = router; // Export the router

// Get a specific review by ID
router.get('/:id', async (req, res) => {
    try {
        const [review] = await db.query('SELECT * FROM reviews WHERE id = ?', [req.params.id]);
        if (review.length === 0) return res.status(404).json({ message: "Review not found" });
        res.json(review[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a new review
router.post('/', async (req, res) => {
    const { user_id, event_id, rating, comment } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO reviews (user_id, event_id, rating, comment, created_at) VALUES (?, ?, ?, ?, NOW())',
            [user_id, event_id, rating, comment]
        );
        res.status(201).json({ message: 'Review added', id: result[0].insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a review
router.put('/:id', async (req, res) => {
    const { rating, comment } = req.body;
    try {
        await db.query(
            'UPDATE reviews SET rating = ?, comment = ? WHERE id = ?',
            [rating, comment, req.params.id]
        );
        res.json({ message: 'Review updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a review
router.delete('/:id', async (req, res) => {
    try {
        await db.query('DELETE FROM reviews WHERE id = ?', [req.params.id]);
        res.json({ message: 'Review deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
