const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true// ignore whitespaces
  },
  address: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String }
}, {
  timestamps: true,
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
