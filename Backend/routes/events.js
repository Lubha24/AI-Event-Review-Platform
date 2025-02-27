const express = require("express");
const router = express.Router();
const db = require("../db"); // Import the MySQL connection

// POST /events - Save a new event
router.post("/", async (req, res) => {
  const { name, date, location, description } = req.body;

  try {
    // Insert the event into the database
    const [result] = await db.query(
      "INSERT INTO events (name, date, location, description, created_at) VALUES (?, ?, ?, ?, ?)",
      [name, date, location, description, new Date()]
    );

    // Fetch the newly created event
    const [event] = await db.query("SELECT * FROM events WHERE id = ?", [
      result.insertId,
    ]);

    console.log("Event saved:", event[0]);
    res.status(201).json(event[0]); // Return the saved event
  } catch (error) {
    console.error("Error saving event:", error);
    res.status(500).json({ error: "Failed to save event" });
  }
});

// GET /events - Fetch all events
router.get("/", async (req, res) => {
  try {
    // Fetch all events from the database
    const [events] = await db.query("SELECT * FROM events");
    res.status(200).json(events); // Return all events
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Failed to fetch events" });
  }
});

module.exports = router;