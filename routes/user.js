const router = require("express").Router();
const authController = require("../controllers/auth");
const userController = require("../controllers/user");

// auth
router.post("/register", authController.signUp);

// user display: 'block',
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getOneUser);
router.put("/:id", userController.updateUser);

module.exports = router;
