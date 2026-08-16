const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  cropName: String,
  waterUsage: Number,
  healthStatus: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Crop', cropSchema);