const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
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
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    max: 1000,
    minLength: 6,
  },
  picture: {
    type: String,
    default: "./uploads/profil/random-user.png",
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

//

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;