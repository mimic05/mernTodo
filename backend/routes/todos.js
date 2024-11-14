const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo'); // This connects us to our Todo model

// 1. Get all todos
router.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find(); // Fetch all todos
    res.json(todos); // Send them as JSON to whoever asked
  } catch (error) {
    res.status(500).json({ message: error.message }); // If something goes wrong
  }
});

// 2. Create a new todo
router.post('/todos', async (req, res) => {
  const todo = new Todo({
    text: req.body.text, // Text of the todo from the request body
  });

  try {
    const newTodo = await todo.save(); // Save to the database
    res.status(201).json(newTodo); // Send back the new todo with a success code
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 3. Update a todo
router.put('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id); // Find todo by id
    if (!todo) return res.status(404).json({ message: 'Todo not found' });

    todo.completed = req.body.completed; // Update its completed status
    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 4. Delete a todo
router.delete('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });

    await todo.deleteOne(); // Delete from database
    res.json({ message: 'Todo deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; // Make these routes available for the app
