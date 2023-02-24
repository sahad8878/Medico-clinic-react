const express = require("express");
const {
  loginController,
  signupController,
} = require("../controller/authController");

const {
  getdepartments,
  getDepartmentDoctors,
  getDoctorDetails,
  getSearchDoctor,
  getExperiencedDoctors,
  postAppointment,
  availableSlot,
} = require("../controller/clientController");

const requireAuth = require("../middlewares/authMiddlewares");

// router object
const router = express.Router();

// router.use(requireAuth)

// routes

// LOGIN || POST
router.post("/clientLogin", loginController);

// SIGNUP || POST
router.post("/clientSignup", signupController);

// Appointments || POST

router.post("/postAppointment", postAppointment);

// Get Departments || GET
router.get("/getdepartments", getdepartments);

// Get Department Doctors || GET

router.get("/getDepartmentDoctors/:departmentId", getDepartmentDoctors);

// Get  Doctor Details || GET

router.get("/getDoctorDetails/:doctorId", getDoctorDetails);

// Search Doctors || GET

router.get("/getSearchDoctor", getSearchDoctor);

// get Experienced Doctors || GET

router.get("/getExperiencedDoctors", getExperiencedDoctors);

// Check available Slotes || GET

router.get("/availableSlot", availableSlot);

module.exports = router;
