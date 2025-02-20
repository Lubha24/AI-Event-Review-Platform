const express = require('express');
const router = express.Router();
const db = require('../db'); // Database connection

// Get all recommendations
router.get('/', async (req, res) => {
    try {
        const [recommendations] = await db.query('SELECT * FROM recommendations');
        res.json(recommendations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a specific recommendation by ID
router.get('/:id', async (req, res) => {
    try {
        const [recommendation] = await db.query('SELECT * FROM recommendations WHERE id = ?', [req.params.id]);
        if (recommendation.length === 0) return res.status(404).json({ message: "Recommendation not found" });
        res.json(recommendation[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a new recommendation
router.post('/', async (req, res) => {
    const { user_id, event_id, recommendation_reason } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO recommendations (user_id, event_id, recommendation_reason, created_at) VALUES (?, ?, ?, NOW())',
            [user_id, event_id, recommendation_reason]
        );
        res.status(201).json({ message: 'Recommendation added', id: result[0].insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a recommendation
router.put('/:id', async (req, res) => {
    const { recommendation_reason } = req.body;
    try {
        await db.query(
            'UPDATE recommendations SET recommendation_reason = ? WHERE id = ?',
            [recommendation_reason, req.params.id]
        );
        res.json({ message: 'Recommendation updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a recommendation
router.delete('/:id', async (req, res) => {
    try {
        await db.query('DELETE FROM recommendations WHERE id = ?', [req.params.id]);
        res.json({ message: 'Recommendation deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
