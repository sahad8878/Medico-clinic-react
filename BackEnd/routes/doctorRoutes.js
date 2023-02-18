const express = require("express");
const { doctorSignup, doctorLogin } = require("../controller/authController");
const {
  doctorDetails,
  doctorStatusChecking,
} = require("../controller/doctorController");

// route object
const router = express.Router();

// routes

// Doctor Signup || post
router.post("/doctorSignup", doctorSignup);

// Doctor Login || Post

router.post("/doctorLogin", doctorLogin);

// Doctor Details || post

router.post("/doctorDetails", doctorDetails);

// Doctor Status Checking || Get

router.get("/statusChecking", doctorStatusChecking);

module.exports = router;
