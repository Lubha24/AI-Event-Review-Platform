const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost', 
    user: 'root', 
    password: 'Khohlani@24', 
    database: 'event_review_db', 
    waitForConnections: true,
    connectionLimit: 10, 
    queueLimit: 0
});

// Test database connection
(async () => {
    try {
        const connection = await db.getConnection();
        console.log('✅ MySQL Database Connected Successfully');
        connection.release();
    } catch (err) {
        console.error('❌ MySQL Connection Failed:', err.message);
    }
})();

module.exports = db;
