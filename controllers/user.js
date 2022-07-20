const UserModel = require("../models/user");
const ObjectId = require("mongoose").Types.ObjectId;

exports.getAllUsers = async (req, res, next) => {
  const users = await UserModel.find().select("-password");
  res.status(200).json(users);
};

exports.getOneUser = (req, res, next) => {
  console.log(req.params);
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ID unknown : " + err);
  }).select("-password");
};

exports.updateUser = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID invalid : " + req.params.id);

  try {
    await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          bio: req.body.bio,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    )
      .then((docs) => res.send(docs))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
