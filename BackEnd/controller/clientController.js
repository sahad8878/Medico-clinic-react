const DepartmentModel = require('../model/departmentModel')
const mongoose = require('mongoose');
const DoctorModel = require('../model/doctorModel');


const getdepartments = async(req, res) => {

    try {
      console.log(req.body);
        const departments = await DepartmentModel.find();
        console.log(departments,"deeeeeeeee");
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
          message: `client getDepartments  controller ${error.message}`,
        });
      }
}


const getDepartmentDoctors = async(req, res ) => {
    try {

        console.log(req.params.departmentId,"bpduuuuuuuuuuu");
        // ObjectID(req.query.departmentId)
        const did = mongoose.Types.ObjectId(req.params.departmentId.trim())
        const departments = await DepartmentModel.findById(did).populate("doctors")
        const doctors = departments.doctors
        console.log(doctors,"deeeeeeeeeeee");
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
          message: `client getDepartmentDoctors  controller ${error.message}`,
        });
      }
}


const getDoctorDetails = async(req, res) => {

  try {

    console.log(req.params.doctorId,"bpduuuuuuuuuuu");
    // ObjectID(req.query.departmentId)
    const did = mongoose.Types.ObjectId(req.params.doctorId.trim())
    const doctor = await DoctorModel.findById(did)
    
    console.log(doctor,"deeeeeeeeeeee");
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

}
module.exports = { getdepartments,getDepartmentDoctors,getDoctorDetails};
