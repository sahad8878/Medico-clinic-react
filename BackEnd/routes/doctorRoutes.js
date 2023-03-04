const express = require("express");
const { doctorSignup, doctorLogin } = require("../controller/authController");
const {
  doctorDetails,
  getDepartments,
  doctorStatusChecking,
  getDoctorDetails,
  getAppointments,
  acceptAppointment,
  rejecrAppointment,
  postDoctorAvailability,
  getScheduleDetails,
  deleteScheduleTime,
  dayScheduleDisable,
  dayScheduleActivate,
  getDoctorAppointmentHistory,
  updateDoctorDetails,
  getDashboardDetails
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

// Doctor schedul || post 

router.post("/postDoctorAvailability",doctorAuthmiddlwares,postDoctorAvailability)

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


// get doctor time schedul  || GET

router.get('/getScheduleDetails',doctorAuthmiddlwares,getScheduleDetails)

// delete doctor time schedul || DELETE 

router.delete('/deleteScheduleTime',doctorAuthmiddlwares,deleteScheduleTime)

// disabel day schedul || PATCH

router.patch('/dayScheduleDisable',doctorAuthmiddlwares,dayScheduleDisable)

// acivate day schedul || PATCH 

router.patch('/dayScheduleActivate',doctorAuthmiddlwares,dayScheduleActivate)

// Doctor appointments history || GET

router.get("/getDoctorAppointmentHistory",doctorAuthmiddlwares,getDoctorAppointmentHistory)


// Update Doctor Detials || POST

router.patch("/updateDoctorDetails",doctorAuthmiddlwares,updateDoctorDetails)

// Get Dashbard Details || GET

router.get("/getDashboardDetails",doctorAuthmiddlwares,getDashboardDetails)
module.exports = router;
