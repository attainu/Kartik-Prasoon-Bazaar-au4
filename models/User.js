const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  method: {
    type: String,
    enum: ["local", "google"],
    required: true
  },
  local: {
    name: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    }
  },
  google: {
    id: {
      type: String
    },
    name: {
      type: String
    },
    email: {
      type: String
    },
    image: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);
