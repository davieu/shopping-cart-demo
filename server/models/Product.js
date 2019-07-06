const mongoose = require('mongoose');
const { Schema } = mongoose;

// data schema for the data to look a certain way
const ProductSchema = new Schema({
  productName: { type: String, lowercase: true, unique: true, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true }
})


const Product = mongoose.model('Product', ProductSchema, 'products');

module.exports = Product;