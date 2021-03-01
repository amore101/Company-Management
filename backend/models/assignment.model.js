const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true// ignore whitespaces
  },
  projectId: { type: Number, required: true}
}, {
  timestamps: true,
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;