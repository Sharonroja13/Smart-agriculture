const express = require('express');
const router = express.Router();
const Crop = require('../models/Crop');

// CREATE
router.post('/', async (req, res) => {
  const crop = await Crop.create(req.body);
  res.json(crop);
});

// READ
router.get('/', async (req, res) => {
  const crops = await Crop.find();
  res.json(crops);
});

// UPDATE
router.put('/:id', async (req, res) => {
  const crop = await Crop.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(crop);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Crop.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;