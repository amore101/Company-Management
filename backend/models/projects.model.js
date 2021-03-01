const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  _id: { type: Number, required: true, unique: true },
  profit: { type: Number },
  deadline: { type: Date }
}, {
  timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
