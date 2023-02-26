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
  putEditDepartment
} = require("../controller/adminController");

const adminAuthMiddlewares = require("../middlewares/adminAuthMiddlewares");

// route object
const router = express.Router();

// routes

// Admin Login || post

router.post("/admin", adminLogin);

// Pending Doctor Details || GET

router.get("/getPendingDoctors",adminAuthMiddlewares, getPendingDoctors);

// Accept Doctor Appointment || Patch

router.patch("/acceptAppointment",adminAuthMiddlewares, acceptDoctorAppointment);

// Reject Doctor Appointment || Patch

router.patch("/rejectAppointment",adminAuthMiddlewares, rejectDoctorAppointment);

// Doctor Details || Get

router.get("/getDoctorsDetails",adminAuthMiddlewares, getDoctorsDetails);

// Block Doctor || PATCH

router.patch("/blockDoctor",adminAuthMiddlewares, blockDoctor);

// UnBlock Doctor || Patch

router.patch("/unBlockDoctor",adminAuthMiddlewares, unBlockDoctor);

// Get Client Details || GEt

router.get("/getClientDetails",adminAuthMiddlewares, getClientDetails);

// Block Client || PATCH

router.patch("/blockClient",adminAuthMiddlewares, blockClient);

// UnBlock Client || Patch

router.patch("/unBlockClient",adminAuthMiddlewares, unBlockClient);

// Adding Departments || Post

router.post("/postDepartments",adminAuthMiddlewares, postDepartments);

// Get Departments || GET

router.get("/getdepartments",adminAuthMiddlewares, getDepartments);

// Delete Department || DELETE

router.delete("/deleteDepartment",adminAuthMiddlewares, deleteDepartment);

// Edit Department || PUT

router.put("/putEditDepartment",adminAuthMiddlewares,putEditDepartment)

module.exports = router;
