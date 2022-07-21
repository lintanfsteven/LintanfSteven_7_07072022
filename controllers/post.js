const PostModel = require("../models/post");
const UserModel = require("../models/post");
const ObjectID = require("mongoose").Types.ObjectId;

exports.readPost = (req, res, next) => {
  PostModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data :" + err);
  });
};

exports.createPost = async (req, res, next) => {
  const newPost = new postModel({
    posterId: req.body.posterId,
    message: req.body.message,
    video: req.body.video,
    likers: [],
    comments: [],
  });

  try {
    const post = await newPost.save();
    return res.status(201).json(post);
  } catch (err) {
    return res.status(400).send(err);
  }
};

exports.updatePost = (req, res, next) => {};

exports.deletePost = (req, res, next) => {};
