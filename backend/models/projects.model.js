const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: { type: String, requierd: true, unique: true},
  profit: { type: Number },
  deadline: { type: String }
}, {
  timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
