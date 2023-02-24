const express = require("express");
const { doctorSignup, doctorLogin } = require("../controller/authController");
const {
  doctorDetails,
  getDepartments,
  doctorStatusChecking,
  getDoctorDetails,
  getAppointments,
  acceptAppointment,
  rejecrAppointment
} = require("../controller/doctorController");

const doctorAuthmiddlwares = require("../middlewares/doctorAuthmiddlwares");

// route object
const router = express.Router();

// routes

// Doctor Signup || post
router.post("/doctorSignup", doctorSignup);

// Doctor Login || Post

router.post("/doctorLogin", doctorLogin);

// Get Departments || GET

router.get("/getdepartments", getDepartments);

// Doctor Details || post

router.post("/doctorDetails",doctorAuthmiddlwares, doctorDetails);

// Doctor Status Checking || Get

router.get("/statusChecking",doctorAuthmiddlwares, doctorStatusChecking);


// get doctor profile details || GET

router.get("/getDoctorDetails/:doctorId",doctorAuthmiddlwares,getDoctorDetails)

// Get appointment informations || GET

router.get('/getAppointments',doctorAuthmiddlwares,getAppointments)

// accept appointment || PATCH

router.patch('/acceptAppointment',doctorAuthmiddlwares,acceptAppointment)

// reject appointment || PATCH

router.patch('/rejecrAppointment',doctorAuthmiddlwares,rejecrAppointment)



module.exports = router;
