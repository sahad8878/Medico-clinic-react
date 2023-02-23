const DepartmentModel = require('../model/departmentModel')
const mongoose = require('mongoose');
const DoctorModel = require('../model/doctorModel');


const getdepartments = async(req, res) => {

    try {
      
      const { page, limit } = req.query;
  console.log(page, limit ,"li,ooo");
      const options = {
        page: parseInt(page, 10) || 1,
        limit: parseInt(limit, 4) || 4,
      };
        const departments = await DepartmentModel.paginate({}, options);
        console.log(departments,"deeeeeeeee");
        if (departments) {
          res.status(201).json(departments);
          // .send({ departments, success: true });
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

// search doctors 

const getSearchDoctor = async(req, res) => {
  try {

    const did = mongoose.Types.ObjectId(req.query.departmentId.trim())
    const location = req.query.location
    const department = await DepartmentModel.findById(did)
    const allDoctors = await DoctorModel.find({
      location: {$regex: new RegExp(`^${location}.*`, "i")}
    })
    const searchResults = allDoctors.filter((obj)=> obj.specialization == department.department)
  
    if(searchResults.length > 0){

      res.status(201).send({ searchResults, success: true });

    }else{
      return res
      .status(200)
      .send({ message: 'No mached Doctor found ', success: false });
    }

  }catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `client getSearchDoctor  controller ${error.message}`,
    });
  }

}

// Get  Experienced Doctors

const getExperiencedDoctors = async(req, res) => {
  try {
let doctors = await DoctorModel.find({experience:{$gte:"2 years"}})   
console.log(doctors); 
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
}

const postAppointment = (req, res) => {
try {

  
} catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `client getSearchDoctor  controller ${error.message}`,
    });
}
}

module.exports = { getdepartments,getDepartmentDoctors,getDoctorDetails,getSearchDoctor,getExperiencedDoctors,postAppointment};
