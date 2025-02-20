const express = require('express');
const router = express.Router();
const db = require('../db'); // Import database connection

// Example GET route
router.get('/', async (req, res) => {
    try {
        const [users] = await db.query('SELECT * FROM users');
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router; // ✅ Ensure you export the router
