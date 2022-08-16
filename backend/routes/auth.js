const express = require("express")
const router = express.Router()
const authCtrl = require("../controllers/auth")

router.post("/signup", authCtrl.signup)
router.post("/login", authCtrl.login)
router.get("/jwtid", authCtrl, (req, res, next) => {
    res.status(200).send(res.locals.user._id);
  });
module.exports = router
