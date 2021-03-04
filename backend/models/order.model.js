const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  projectName: { type: String, required: true, unique: true},
  companyName: { type: String, required: true }
}, {
  timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
