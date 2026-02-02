const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    name:String,
    price:Number,
    currency: { type: String, default: "usd" },
    active: { type: Boolean, default: true },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Plan', planSchema);