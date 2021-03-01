const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employmentSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true// ignore whitespaces
  },
  companyName: { type: String, required: true }
}, {
  timestamps: true,
});

const Employment = mongoose.model('Employment', employmentSchema);

module.exports = Employment;
