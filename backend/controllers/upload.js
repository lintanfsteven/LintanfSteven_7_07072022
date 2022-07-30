const UserModel = require("../models/user");
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);
const { uploadErrors } = require("../utils/errors");

exports.uploadProfil = async (req, res, next) => {
  try {
    if (
      req.file.detectedMimetype != "image/jpg" &&
      req.file.detectedMimetype != "image/png" &&
      req.file.detectedMimetype != "image/jpeg"
    )
      throw Error("Invalid file");

    if (req.file.size > 500000) throw Error("Max size");
  } catch (err) {
    const errors = uploadErrors(err);
    return res.status(201).json({ errors });
  }

  const fileName = req.body.name + ".jpg";

  await pipeline(
    req.file.stream,
    fs.createWriteStream(
      `${__dirname}/../client/public/uploads/profil/${fileName}`
    )
  );

  try {
    await UserModel.findByIdAndUpdate(
      req.body.userId,
      { $set: { picture: "./uploads/profil/" + fileName } },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        if (!err) return res.send(docs);
        else return res.status(500).send({ message: err });
      }
    );
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};
