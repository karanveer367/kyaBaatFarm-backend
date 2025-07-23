const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String,
    required: true },

  price: { type: Number,
    required: true },

  unit: { type: String, 
    required: true },

  quantity: { 
    type: Number, 
    required: true
  },

  category: { type: String, 
    enum: ["Fruit", "Veggie"], 
    required: true },

  image: { type: String, 
    required: true }, // file path or URL
});

module.exports = mongoose.model("Product", productSchema);