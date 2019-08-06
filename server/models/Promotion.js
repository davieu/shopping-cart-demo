const mongoose = require('mongoose');
const { Schema } = mongoose;

const PromotionSchema = new Schema({
  promotions: []
})

const Promotion = mongoose.model('Promotion', PromotionSchema, 'promotions');

module.exports = Promotion;