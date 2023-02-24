const mongoose = require('mongoose');
const DepartmentModel = require('../model/departmentModel')
const DoctorModel = require('../model/doctorModel');
const AppointmentModel = require('../model/appointmentModel')


const availableSlots =
 [
  { date: '2023-02-23', time: '10:00am' },
  { date: '2023-02-24', time: '11:00am' },
  { date: '2023-02-25', time: '2:00pm' },
  { date: '2023-02-26', time: '3:00pm' },
  { date: '2023-02-27', time: '9:00am' },
  { date: '2023-02-28', time: '10:00am' },
];

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
    const allDoctors = await DoctorModel.find({$or:[
      {location: {$regex: new RegExp(`^${location}.*`, "i")}},
      {fName: {$regex: new RegExp(`^${location}.*`, "i")}},
    ]})
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

const postAppointment = async(req, res) => {
try {
  const {date,time,doctor,client} = req.body
console.log(date,time,doctor,client);
const selectedSlot = availableSlots.find(slot => slot.date === date && slot.time === time);
if (!selectedSlot) {
  res.status(201).send({ message: 'The selected slot is no longer available.',success:false });
  return;
}
  const newAppointment = new AppointmentModel({
    date,
    time,
    doctor, 
    client
  });
  await newAppointment.save();

  res.send({ message: 'Appointment booked successfully.',success:true });
  
} catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `client getSearchDoctor  controller ${error.message}`,
    });
}
}

const availableSlot = async(req, res) => {

  
  res.json(availableSlots);
}

module.exports = { getdepartments,getDepartmentDoctors,getDoctorDetails,getSearchDoctor,getExperiencedDoctors,postAppointment,availableSlot};
