const DoctorModel = require("../model/doctorModel");

// post doctor details
const doctorDetails = async (req, res) => {
  try {
    const {
      education,
      address,
      startingTime,
      endingTime,
      doctorImg,
      availableDate,
      doctorId,
    } = req.body;

    if (
      education &&
      address &&
      startingTime &&
      endingTime &&
      doctorImg &&
      availableDate
    ) {
      console.log(req.body);
      const doctor = await DoctorModel.findByIdAndUpdate(
        doctorId,
        {
          $set: {
            education,
            address,
            startingTime,
            endingTime,
            doctorImg,
            availableDate,
            status: "active",
          },
        },
        { new: true }
      );
      console.log(doctor);
      if (doctor) {
        res
          .status(201)
          .send({ message: "your details have been saved", success: true });
      } else {
        return res
          .status(200)
          .send({ message: "No doctor exist ", success: false });
      }
    } else {
      return res
        .status(200)
        .send({ message: "All fields must be filled", success: false });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({
        success: false,
        message: `postDoctorDetails controller ${error.message}`,
      });
  }
};

// Get Doctor Details

const getDoctorsDetails = async (req, res) => {
  try {
    const doctors = await DoctorModel.find({ status:{$ne:"pending"}});
    console.log(doctors);
    console.log("--------------------------------------------------------");

    if (doctors) {
      res.status(201).send({ doctors, success: true });
    } else {
      return res.status(200).send({ message: "No doctors ", success: false });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({
        success: false,
        message: `getDoctorDetails controller ${error.message}`,
      });
  }
};

// Get Pending Doctors Details

const getPendingDoctors = async (req, res) => {
  try {
    const pendingDoctors = await DoctorModel.find({ status: "pending" });
    console.log(pendingDoctors);
    if (pendingDoctors) {
      res.status(201).send({ pendingDoctors, success: true });
    } else {
      return res
        .status(200)
        .send({ message: "No pendingDoctors", success: false });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({
        success: false,
        message: `getPendingDoctors controller ${error.message}`,
      });
  }
};

// Accept Doctor Appoiontments
const acceptDoctorAppointment = async (req, res) => {
  try {
    console.log(req.body);
    const doctor = await DoctorModel.findByIdAndUpdate(
      req.body.id,
      { status: "approved" },
      { new: true }
    );
    console.log(doctor);
    if (doctor) {
      res
        .status(201)
        .send({ message: "Doctor request accepted", success: true });
    } else {
      return res
        .status(200)
        .send({ message: "Doctor doesnot exist", success: false });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({
        success: false,
        message: `AcceptDoctorAppointment controller ${error.message}`,
      });
  }
};

const rejectDoctorAppointment = async (req, res) => {
  try {
    console.log(req.body);
    await DoctorModel.findByIdAndRemove(req.body.id).then((doctor) => {
      console.log(doctor);
      if (doctor) {
        res
          .status(201)
          .send({ message: "Doctor request rejected", success: true });
      } else {
        return res
          .status(200)
          .send({ message: "Doctor doesnot exist", success: false });
      }
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({
        success: false,
        message: `rejectDoctorAppointment controller ${error.message}`,
      });
  }
};

const doctorStatusChecking = async (req, res) => {
  try {
    console.log(req.query);
    doctor = await DoctorModel.findById(req.query.id);
    let doctorStatus;
    if (doctor.status === "pending") {
      doctorStatus = doctor.status;
    }
    if (doctor.status === "approved") {
      doctorStatus = doctor.status;
    }
    if (doctor.status === "active") {
      doctorStatus = doctor.status;
    }
    res.status(201).send({ doctorStatus, success: true });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({
        success: false,
        message: `checkDoctorStatus controller ${error.message}`,
      });
  }
};
module.exports = {
  doctorDetails,
  getDoctorsDetails,
  getPendingDoctors,
  acceptDoctorAppointment,
  rejectDoctorAppointment,
  doctorStatusChecking,
};
