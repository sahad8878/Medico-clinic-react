const express = require("express");

const {
  getClietProfile,
  patchUpdateClientDetails,
  getdepartments,
  getDepartmentDoctors,
  getDoctorDetails,
  getSearchDoctor,
  getExperiencedDoctors,
  getAllNotifications
} = require("../controller/clientController");

const {
  verifyAppointment,
  availableSlot,
  getClientNotifications,
  postAppointment,
  getConfirmedAppointments,
  patchCancelAppointment

} = require("../controller/clientAppointmentController");

const clientAuthMiddlewares = require("../middlewares/clientAuthMiddlewares");

// router object
const router = express.Router();

// routes

// Appointments || POST

router.post("/verifyAppointment", clientAuthMiddlewares, verifyAppointment);

// confirm client appointment || PATCH

router.post(
  "/postAppointment",
  clientAuthMiddlewares,
  postAppointment
);


// get user information || GET

router.get("/getClietProfile", clientAuthMiddlewares, getClietProfile);

// Get Departments || GET
router.get("/getdepartments", clientAuthMiddlewares, getdepartments);

// update client Details || POST

router.post(
  "/updateClientDetails",
  clientAuthMiddlewares,
  patchUpdateClientDetails
);

// Get Department Doctors || GET

router.get(
  "/getDepartmentDoctors/:id/doctors",
  clientAuthMiddlewares,
  getDepartmentDoctors
);

// Get  Doctor Details || GET

router.get(
  "/getDoctorDetails/:doctorId",
  clientAuthMiddlewares,
  getDoctorDetails
);

// Search Doctors || GET

router.get("/getSearchDoctor", clientAuthMiddlewares, getSearchDoctor);

// get Experienced Doctors || GET

router.get(
  "/getExperiencedDoctors",
  clientAuthMiddlewares,
  getExperiencedDoctors
);

// Check available Slotes || GET

router.get(
  "/availableSlot/:doctorId/:selectedDate",
  clientAuthMiddlewares,
  availableSlot
);

// get Client Booking notifications

router.get(
  "/getClientNotifications",
  clientAuthMiddlewares,
  getClientNotifications
);


// get confirmed client appointments || GET

router.get(
  "/getConfirmedAppointments",
  clientAuthMiddlewares,
  getConfirmedAppointments
);

// cancet appointment || PATCH

router.patch('/patchCancelAppointment',
clientAuthMiddlewares,
patchCancelAppointment)

// Notifications || POST

router.post('/getAllNotifications',
clientAuthMiddlewares,
getAllNotifications)

module.exports = router;
