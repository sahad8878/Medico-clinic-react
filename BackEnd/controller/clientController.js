const mongoose = require("mongoose");
const DepartmentModel = require("../model/departmentModel");
const DoctorModel = require("../model/doctorModel");
const AppointmentModel = require("../model/appointmentModel");
const ClientModel = require("../model/clientModel");

const moment = require("moment");

//get client details

const getClietProfile = async (req, res) => {
  try {
    const client = await ClientModel.findById(req.body.userId);
    if (client) {
      res.status(201).send({ client, success: true });
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

// update client details

const patchUpdateClientDetails = async (req, res) => {
  try {
    console.log(req.body.userId);
    console.log(req.body, "update client address");
    const { address, clientImage, age } = req.body;

    if ((address, clientImage, age)) {
      const client = await ClientModel.findByIdAndUpdate(
        req.body.userId,
        {
          $set: {
            address,
            clientImage,
            age,
          },
        },
        { new: true }
      );
      if (!client) {
        return res
          .status(200)
          .send({ message: "No Client exist ", success: false });
      } else {
        res
          .status(201)
          .send({ message: "your details have been saved", success: true });
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
      message: `client getDepartments  controller ${error.message}`,
    });
  }
};

// get departments
const getdepartments = async (req, res) => {
  try {
    const departments = await DepartmentModel.find();
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
    const { id } = req.params;
    const { page, limit } = req.query;
    const did = mongoose.Types.ObjectId(id.trim());

    console.log(id, page, limit, "get depa");
    const options = {
      page: parseInt(page, 10) || 1,
      limit: parseInt(limit, 4) || 4,
    };

    const department = await DepartmentModel.findById(did);
    console.log(department, "department");
    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }
    let regExp = new RegExp(department.department, "i");
    const doctors = await DoctorModel.paginate(
      { specialization: regExp, status: "active" },
      options
    );
    console.log(doctors, "doctors");
    if (doctors) {
      res.status(201).json(doctors);
    } else {
      return res.status(200).send({ message: "No Doctors ", success: false });
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
    let doctors = await DoctorModel.find({
      status: "active",
      experience: { $gte: "2 years" },
    });
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

const getAllNotifications = async(req, res) => {
try {
  const client = await ClientModel.findOne({_id:req.body.userId})

  const seenNotifications = client.seenNotifications
  const notifications = client.notifications
  seenNotifications.push(...notifications)
  client.notifications = []
  client.seenNotifications =  notifications
  const updatedClien = await client.save()
  res.status(200).send({success:true,message:"all notifications marked as read",data:updatedClien})
} catch (error) {
  console.log(error);
  res.status(500).send({
    success: false,
    message: `getAllNotifications  controller ${error.message}`,
  });
}

}



module.exports = {
  getClietProfile,
  patchUpdateClientDetails,
  getdepartments,
  getDepartmentDoctors,
  getDoctorDetails,
  getSearchDoctor,
  getExperiencedDoctors,
  getAllNotifications

};
