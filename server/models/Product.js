const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true
  },
  website: {
    type: String,
    required: [true, 'Please add a website'],
    enum: [
      'ASOS'
    ]
  }
});

module.exports = mongoose.model('Product', ProductSchema);
