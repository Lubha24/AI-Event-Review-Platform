const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db'); // Database connection

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

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});
