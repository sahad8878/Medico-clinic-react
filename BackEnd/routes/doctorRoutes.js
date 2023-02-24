const express = require("express");
const { doctorSignup, doctorLogin } = require("../controller/authController");
const {
  doctorDetails,
  doctorStatusChecking,
  getAppointments,
  acceptAppointment,
  rejecrAppointment
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

// Get appointment informations || GET

router.get('/getAppointments',getAppointments)

// accept appointment || PATCH

router.patch('/acceptAppointment',acceptAppointment)

// reject appointment || PATCH


router.patch('/rejecrAppointment',rejecrAppointment)

module.exports = router;
