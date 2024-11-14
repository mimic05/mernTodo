const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const PORT = 5000;

// Middleware to parse JSON
app.use(cors());
app.use(express.json());

// Connect MongoDB with Express
mongoose.connect('mongodb://localhost:27017/todoApp')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Basic route to check if the server is running
app.get('/', (req, res) => {
  res.send('Server is up and running');
});

// Import routes
const todoRoutes = require('./routes/todos');

// Use the todo routes
app.use('/api', todoRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
