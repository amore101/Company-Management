const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ordermentSchema = new Schema({
  _id: { type: Number, required: true, unique: true},
  companyName: { type: String, required: true }
}, {
  timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
