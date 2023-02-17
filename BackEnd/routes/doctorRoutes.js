const express = require('express');
const { doctorSignup,doctorLogin} = require('../controller/authController');
const {doctorDetails,getDoctorsDetails,getPendingDoctors,acceptDoctorAppointment,rejectDoctorAppointment,doctorStatusChecking} = require('../controller/doctorController')

// route object
const router = express.Router();

// routes

// Doctor Signup || post
router.post('/doctorSignup', doctorSignup);

// Doctor Login || Post

router.post('/doctorLogin',doctorLogin )

// Doctor Details || post

router.post('/doctorDetails',doctorDetails)

// Doctor Details || Get

router.get('/getDoctorsDetails',getDoctorsDetails)


// Pending Doctor Details || Get
router.get('/getPendingDoctors',getPendingDoctors)

// Accept Doctor Appointment || Patch

router.patch('/acceptAppointment',acceptDoctorAppointment)

// Reject Doctor Appointment || Patch

router.patch('/rejectAppointment', rejectDoctorAppointment)

// Doctor Status Checking || Get

router.get('/statusChecking',doctorStatusChecking)

module.exports = router;
