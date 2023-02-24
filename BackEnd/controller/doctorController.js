const mongoose = require('mongoose');
const DoctorModel = require("../model/doctorModel");
const DepartmentModel = require("../model/departmentModel");
const AppointmentModel = require('../model/appointmentModel')
const { exists } = require("../model/clientModel");

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
      console.log(req.body, "gpppppppppppppp");
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
      ).then(async (doctor) => {
        let spec = doctor.specialization;
        if (doctor) {
          let regExp = new RegExp(spec, "i");

          const department = await DepartmentModel.findOne({
            department: { $regex: regExp },
          });

          console.log(department.doctors.includes(doctor._id));
          if (!department.doctors.includes(doctor._id)) {
            department.doctors.push(doctor._id);
            console.log("doctor added");
          } else {
            console.log("doctor allready exist");
          }
          department.save();
          res
            .status(201)
            .send({ message: "your details have been saved", success: true });
        } else {
          return res
            .status(200)
            .send({ message: "No doctor exist ", success: false });
        }
      });
    } else {
      return res
        .status(200)
        .send({ message: "All fields must be filled", success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `postDoctorDetails controller ${error.message}`,
    });
  }
};

// Doctor status checking

const doctorStatusChecking = async (req, res) => {
  try {
    console.log(req.query);
    doctor = await DoctorModel.findById(req.query.id);
    let doctorStatus;

    if(doctor.block === false){
    if (doctor.status === "pending") {
      doctorStatus = doctor.status;
    }
    if (doctor.status === "approved") {
      doctorStatus = doctor.status;
    }
    if (doctor.status === "active") {
      doctorStatus = doctor.status;
    }
  }else{
    doctorStatus = "blocked";
  }
    
    res.status(201).send({ doctorStatus, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `checkDoctorStatus controller ${error.message}`,
    });
  }
};

// find doctor appointment 

const getAppointments = async(req, res) => {
try {
  console.log(req.query.doctorId,"idddddddddddddddd");
  
  const pendingAppointments = await AppointmentModel.find({doctor:req.query.doctorId,status:"pending"}).populate("client").sort({ updatedAt: -1 })
    console.log(pendingAppointments,"appointments");
    if (pendingAppointments) {
      res.status(201).send({ pendingAppointments, success: true });
    } else {
      return res
        .status(200)
        .send({ message: "No pendingDoctors", success: false });
    }

} catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `getAppointment controller ${error.message}`,
    });
}

}

// Accept  Appoiontments

const acceptAppointment = async (req, res) => {
  try {
    console.log(req.body);
    const appointmen = await AppointmentModel.findByIdAndUpdate(
      req.body.id,
      { status: "approved" },
      { new: true }
    );
    console.log(appointmen);
    if (appointmen) {
      res.status(201).send({
        message: ` Patient  Booking accepted`,
        success: true,
      });
    } else {
      return res.status(200).send({
        message: `Patient  doesnot exist`,
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `AcceptAppointment controller ${error.message}`,
    });
  }
};

// Reject Appointment

const rejecrAppointment = async (req, res) => {
  try {
    console.log(req.body);
    const appointmen = await AppointmentModel.findByIdAndUpdate(
      req.body.id,
      { status: "rejected" },
      { new: true }
    );
    console.log(appointmen);
    if (appointmen) {
      res.status(201).send({
        message: ` Patient Booking rejected`,
        success: true,
      });
    } else {
      return res.status(200).send({
        message: `Patient  doesnot exist`,
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `rejectDoctorAppointment controller ${error.message}`,
    });
  }
};



module.exports = {
  doctorDetails,
  doctorStatusChecking,
  getAppointments,
  acceptAppointment,
  rejecrAppointment
};
