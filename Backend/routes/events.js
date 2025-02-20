const express = require('express');
const router = express.Router();
const db = require('../db'); // Import the database connection

// Get all events
router.get('/', async (req, res) => {
    try {
        const [events] = await db.query('SELECT * FROM events'); // Query database
        res.json(events);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router; // ✅ Ensure you export the router
