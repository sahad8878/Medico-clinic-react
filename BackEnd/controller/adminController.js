const DepartmentModel = require("../model/departmentModel");
const DoctorModel = require("../model/doctorModel");
const ClientModel = require("../model/clientModel");

// Get Pending Doctors Details

const getPendingDoctors = async (req, res) => {
  try {
    const pendingDoctors = await DoctorModel.find({ status: "pending" }).sort({
      updatedAt: -1,
    });
    if (pendingDoctors) {
      res.status(201).send({ pendingDoctors, success: true });
    } else {
      return res
        .status(200)
        .send({ message: "No pendingDoctors", success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `getPendingDoctors controller ${error.message}`,
    });
  }
};

// Accept Doctor Appoiontments

const acceptDoctorAppointment = async (req, res) => {
  try {
    const doctor = await DoctorModel.findByIdAndUpdate(
      req.body.id,
      { status: "approved" },
      { new: true }
    );
    console.log(doctor);
    if (doctor) {
      res.status(201).send({
        message: ` Doctor ${doctor.fName} request accepted`,
        success: true,
      });
    } else {
      return res.status(200).send({
        message: `Doctor ${doctor.fName} doesnot exist`,
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `AcceptDoctorAppointment controller ${error.message}`,
    });
  }
};

// Reject Doctor requests

const rejectDoctorAppointment = async (req, res) => {
  try {
    await DoctorModel.findByIdAndRemove(req.body.id).then((doctor) => {
      if (doctor) {
        res.status(201).send({
          message: `Doctor ${doctor.fName} request rejected`,
          success: true,
        });
      } else {
        return res.status(200).send({
          message: `Doctor ${doctor.fName} does not exist`,
          success: false,
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `rejectDoctorAppointment controller ${error.message}`,
    });
  }
};

// Get Doctor Details

const getDoctorsDetails = async (req, res) => {
  try {
    const doctors = await DoctorModel.find({ status: { $ne: "pending" } }).sort(
      { updatedAt: -1 }
    );
    console.log(doctors);
    if (doctors) {
      res.status(201).send({ doctors, success: true });
    } else {
      return res.status(200).send({ message: "No doctors ", success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `getDoctorDetails controller ${error.message}`,
    });
  }
};

// Block doctor

const blockDoctor = async (req, res) => {
  try {
    const doctor = await DoctorModel.findByIdAndUpdate(req.body.id, {
      block: true,
    });
    if (doctor) {
      res
        .status(201)
        .send({ message: `Doctor ${doctor.fName} is Blocked`, success: true });
    } else {
      return res.status(200).send({
        message: `Doctor ${doctor.fName} does not exist`,
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `BlockDoctor controller ${error.message}`,
    });
  }
};

// UnBlock Doctor

const unBlockDoctor = async (req, res) => {
  try {
    const doctor = await DoctorModel.findByIdAndUpdate(req.body.id, {
      block: false,
    });
    if (doctor) {
      res.status(201).send({
        message: `Doctor ${doctor.fName} is unblocked`,
        success: true,
      });
    } else {
      return res.status(200).send({
        message: `Doctor ${doctor.fName} does not exist`,
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `unBlockDoctor controller ${error.message}`,
    });
  }
};

// get Clinet Details

const getClientDetails = async (req, res) => {
  try {
    const clients = await ClientModel.find().sort({ updatedAt: -1 });
    if (clients) {
      res.status(201).send({ clients, success: true });
    } else {
      return res.status(200).send({ message: "No Clients ", success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `getClientDetails controller ${error.message}`,
    });
  }
};

// Block Client

const blockClient = async (req, res) => {
  try {
    const client = await ClientModel.findByIdAndUpdate(req.body.id, {
      block: true,
    });
    if (client) {
      res
        .status(201)
        .send({ message: `${client.fName} is blocked`, success: true });
    } else {
      return res
        .status(200)
        .send({ message: `${client.fName} doesnot exist`, success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `blockClient controller ${error.message}`,
    });
  }
};

// UnBlock Doctor

const unBlockClient = async (req, res) => {
  try {
    const client = await ClientModel.findByIdAndUpdate(req.body.id, {
      block: false,
    });
    if (client) {
      res
        .status(201)
        .send({ message: `${client.fName} is unblocked`, success: true });
    } else {
      return res
        .status(200)
        .send({ message: `${client.fName} doesnot exist`, success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `unBlockClient controller ${error.message}`,
    });
  }
};

// Add Departments
const postDepartments = async (req, res) => {
  try {
    const { department, departmentImg, description } = req.body;
    if (department && departmentImg && description) {
      let regExp = new RegExp(department, "i");
      let dbDepartment = await DepartmentModel.findOne({
        department: { $regex: regExp },
      });
      if (dbDepartment) {
        return res.status(200).send({
          message: `${dbDepartment.department} Department is already exist`,
          success: false,
        });
      } else {
        const newDepartment = new DepartmentModel({
          department,
          departmentImg,
          description,
        });
        await newDepartment.save().then(() => {
          res.status(201).send({
            message: "New department added successfully",
            success: true,
          });
        });
      }
    } else {
      return res
        .status(200)
        .send({ message: "All fields must be filled", success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `PostDepartments controller ${error.message}`,
    });
  }
};

// Get Departments

const getDepartments = async (req, res) => {
  try {
    const departments = await DepartmentModel.find().sort({ updatedAt: -1 });
    if (departments) {
      res.status(201).send({ departments, success: true });
    } else {
      return res
        .status(200)
        .send({ message: "No Departments ", success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `getDepartments controller ${error.message}`,
    });
  }
};

// Delete department

const deleteDepartment = async (req, res) => {
  try {
    await DepartmentModel.findByIdAndRemove(req.query.id).then((department) => {
      if (department) {
        res.status(201).send({
          message: `${department.department} Department deleted`,
          success: true,
        });
      } else {
        return res.status(200).send({
          message: `${department.department} Department does not Exist`,
          success: false,
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `deleteDepartments controller ${error.message}`,
    });
  }
};
module.exports = {
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
};
