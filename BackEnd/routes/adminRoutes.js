const express = require("express");
const { adminLogin } = require("../controller/authController");
const {
  getPendingDoctors,
  acceptDoctorAppointment,
  rejectDoctorAppointment,
  getDoctorsDetails,
  blockDoctor,
  unBlockDoctor,
  getClientDetails,
  blockClient,
  unBlockClient,
  postDepartments,
  getDepartments,
  deleteDepartment,
} = require("../controller/adminController");

// route object
const router = express.Router();

// routes

// Admin Login || post
router.post("/admin", adminLogin);

// Pending Doctor Details || GET

router.get("/getPendingDoctors", getPendingDoctors);

// Accept Doctor Appointment || Patch

router.patch("/acceptAppointment", acceptDoctorAppointment);

// Reject Doctor Appointment || Patch

router.patch("/rejectAppointment", rejectDoctorAppointment);

// Doctor Details || Get

router.get("/getDoctorsDetails", getDoctorsDetails);

// Block Doctor || PATCH

router.patch("/blockDoctor", blockDoctor);

// UnBlock Doctor || Patch

router.patch("/unBlockDoctor", unBlockDoctor);

// Get Client Details || GEt

router.get("/getClientDetails", getClientDetails);

// Block Client || PATCH

router.patch("/blockClient", blockClient);

// UnBlock Client || Patch

router.patch("/unBlockClient", unBlockClient);

// Adding Departments || Post

router.post("/postDepartments", postDepartments);

// Get Departments || GET

router.get("/getdepartments", getDepartments);

// Delete Department || DELETE
router.delete("/deleteDepartment", deleteDepartment);

module.exports = router;
