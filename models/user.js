const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
  pseudo: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    validate: [isEmail],
    unique: true,
  },
  password: {
    type: String,
    required: true,
    max: 1000,
    minLength: 6,
  },
  picture: {
    type: String,
  },
  bio: {
    type: String,
    max: 1500,
  },
  followers: {
    type: [String],
  },
  following: {
    type: [String],
  },
});
