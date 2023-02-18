const express = require("express");
const {
  loginController,
  signupController,
} = require("../controller/authController");

const requireAuth = require("../middlewares/authMiddlewares");
// router object
const router = express.Router();

// router.use(requireAuth)
// routes

// LOGIN || POST
router.post("/clientLogin", loginController);

// SIGNUP || POST
router.post("/clientSignup", signupController);

module.exports = router;
