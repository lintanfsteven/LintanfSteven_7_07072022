const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  pseudo: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
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
    minlength: 6,
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

// salt password
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// compares password with db password (bcrypt.compare)
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
