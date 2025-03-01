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
  
          console.log('User inserted successfully:', results); // Log the results
          res.status(201).json({ message: 'User registered successfully.' });
        }
      );
    });
  });