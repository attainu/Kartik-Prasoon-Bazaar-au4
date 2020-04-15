const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProductSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  city: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  photos: {
    type: [String],
  },
});

module.exports = Product = mongoose.model("products", ProductSchema);
