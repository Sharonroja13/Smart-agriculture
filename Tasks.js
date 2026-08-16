const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Create
router.post('/', async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

// Read
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Delete
router.delete('/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// Update task (mark complete)
router.put('/:id', async (req, res) => {
  console.log("PUT API HIT");  // 👈 ADD THIS

  const task = await Task.findByIdAndUpdate(
    req.params.id,
    { completed: req.body.completed },
    { new: true }
  );
  res.json(task);
});

module.exports = router;