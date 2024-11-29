const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./models'); // Import Sequelize instance
const User = require('./models/User'); // Import User model

const app = express();
const PORT = process.env.PORT || 5000;
const authRoutes = require('./routes/auth'); // Import auth routes

// Middleware
app.use(cors());
app.use(express.json());

// Sync database
(async () => {
  try {
    await sequelize.sync(); 
    console.log('Database synced successfully.');

    // // Optional: Add a sample user
    // await User.create({
    //   username: 'mandyschippers',
    //   email: 'mandyschippers@hotmail.com',
    //   password: 'securepassword123',
    // });
  } catch (error) {
    console.error('Error syncing database:', error);
  }
})();

// API route to get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Sample API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.use('/api/auth', authRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
