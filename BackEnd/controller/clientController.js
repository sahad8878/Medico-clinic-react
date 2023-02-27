const mongoose = require("mongoose");
const DepartmentModel = require("../model/departmentModel");
const DoctorModel = require("../model/doctorModel");
const AppointmentModel = require("../model/appointmentModel");
const ClientModel = require("../model/clientModel");


const availableSlots = [
  { date: "2023-02-23", time: "10:00am" },
  { date: "2023-02-24", time: "11:00am" },
  { date: "2023-02-25", time: "2:00pm" },
  { date: "2023-02-26", time: "3:00pm" },
  { date: "2023-02-27", time: "9:00am" },
  { date: "2023-02-28", time: "10:00am" },
];



const getdepartments = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const options = {
      page: parseInt(page, 10) || 1,
      limit: parseInt(limit, 4) || 4,
    };
    const departments = await DepartmentModel.paginate({}, options);
    if (departments) {
      res.status(201).json(departments);
    } else {
      return res
        .status(200)
        .send({ message: "No Departments ", success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `client getDepartments  controller ${error.message}`,
    });
  }
};







const getDepartmentDoctors = async (req, res) => {
  try {
    const {id} = req.params
    const { page, limit } = req.query;
    const did = mongoose.Types.ObjectId(id.trim());

    console.log(id,page, limit,'get depa');
    const options = {
      page: parseInt(page, 10) || 1,
      limit: parseInt(limit, 4) || 4,
    };

    const department = await DepartmentModel.findById(did)
    console.log(department,"department");
    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }
    let regExp = new RegExp(department.department, "i");
    const doctors = await DoctorModel.paginate({ specialization:regExp,status:'active'}, options);
    console.log(doctors,"doctors");
    if (doctors) {
      res.status(201).json(doctors);
    } else {
      return res
        .status(200)
        .send({ message: "No Doctors ", success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `client getDepartmentDoctors  controller ${error.message}`,
    });
  }
};

const getDoctorDetails = async (req, res) => {
  try {
    const did = mongoose.Types.ObjectId(req.params.doctorId.trim());
    const doctor = await DoctorModel.findById(did);

    if (doctor) {
      res.status(201).send({ doctor, success: true });
    } else {
      return res
        .status(200)
        .send({ message: `couldnt find Doctor `, success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `client getDepartmentDoctors  controller ${error.message}`,
    });
  }
};

// search doctors

const getSearchDoctor = async (req, res) => {
  try {
    const did = mongoose.Types.ObjectId(req.query.departmentId.trim());
    const value = req.query.location;
    const department = await DepartmentModel.findById(did);
    const allDoctors = await DoctorModel.find({
      $or: [
        { location: { $regex: new RegExp(`^${value}.*`, "i") } },
        { fName: { $regex: new RegExp(`^${value}.*`, "i") } },
      ],
    });
    const searchResults = allDoctors.filter(
      (obj) => obj.specialization == department.department
    );

    if (searchResults.length > 0) {
      res.status(201).send({ searchResults, success: true });
    } else {
      return res
        .status(200)
        .send({ message: "No mached Doctor found ", success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `client getSearchDoctor  controller ${error.message}`,
    });
  }
};

// Get  Experienced Doctors

const getExperiencedDoctors = async (req, res) => {
  try {
    let doctors = await DoctorModel.find({status:"active", experience: { $gte: "2 years" } });
    if (doctors) {
      res.status(201).send({ doctors, success: true });
    } else {
      return res
        .status(200)
        .send({ message: `couldnt find Doctors `, success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `client getSearchDoctor  controller ${error.message}`,
    });
  }
};

const postAppointment = async (req, res) => {
  try {
    const { date, time, doctor, client } = req.body;
    const selectedSlot = availableSlots.find(
      (slot) => slot.date === date && slot.time === time
    );
    if (!selectedSlot) {
      res
        .status(201)
        .send({
          message: "The selected slot is no longer available.",
          success: false,
        });
      return;
    }
    const newAppointment = new AppointmentModel({
      date,
      time,
      doctor,
      client,
    });
    await newAppointment.save();

    res.send({ message: "Appointment booked successfully.", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `client getSearchDoctor  controller ${error.message}`,
    });
  }
};

const availableSlot = async (req, res) => {
  res.json(availableSlots);
};

module.exports = {
  getdepartments,
  getDepartmentDoctors,
  getDoctorDetails,
  getSearchDoctor,
  getExperiencedDoctors,
  postAppointment,
  availableSlot,
};
