const express = require('express');
const { doctorSignup} = require('../controller/authController');
const {doctorDetails,getDoctorsDetails,getPendingDoctors,acceptDoctorAppointment,rejectDoctorAppointment} = require('../controller/doctorController')

// route object
const router = express.Router();

// routes

// Doctor Signup || post
router.post('/doctorSignup', doctorSignup);

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

module.exports = router;
