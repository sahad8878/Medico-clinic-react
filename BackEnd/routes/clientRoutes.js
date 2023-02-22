const express = require("express");
const {
  loginController,
  signupController,
} = require("../controller/authController");

const {getdepartments,getDepartmentDoctors,getDoctorDetails} = require('../controller/clientController')

const requireAuth = require("../middlewares/authMiddlewares");
// router object
const router = express.Router();

// router.use(requireAuth)
// routes

// LOGIN || POST
router.post("/clientLogin", loginController);

// SIGNUP || POST
router.post("/clientSignup", signupController);

// Get Departments || GET
router.get('/getdepartments',getdepartments)

// Get Department Doctors || GET

router.get('/getDepartmentDoctors/:departmentId',getDepartmentDoctors)

// Get  Doctor Details || GET

router.get('/getDoctorDetails/:doctorId',getDoctorDetails)

module.exports = router;
