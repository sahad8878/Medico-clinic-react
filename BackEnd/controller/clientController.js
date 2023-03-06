const mongoose = require("mongoose");
const DepartmentModel = require("../model/departmentModel");
const DoctorModel = require("../model/doctorModel");
const AppointmentModel = require("../model/appointmentModel");
const ClientModel = require("../model/clientModel");

const moment =require("moment");


//get client details 

const getClietProfile = async(req, res) => {
  try {
     const client = await ClientModel.findById(req.body.userId)
     if (client) {
        res.status(201)
        .send({ client, success: true });
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

// update client details 

const patchUpdateClientDetails = async(req, res) => {
try {
  console.log(req.body.userId);
console.log(req.body,"update client address");
  const {address,clientImage,age} = req.body

  if(address,clientImage,age){

  
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
  )
  if (!client) {
    return res
    .status(200)
    .send({ message: "No Client exist ", success: false });
  }else{
    res
    .status(201)
    .send({ message: "your details have been saved", success: true });
  }
}else{
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

}

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

// const postAppointment = async (req, res) => {
//   try {
//     const { date, time, doctor, client } = req.body;
//     console.log(req.body);
//     // const doctorAvailability = await DoctorModel.findOne({ doctorId, dayOfWeek: appointmentTime.getDay() });
//     const selectedDay = moment(date).format('dddd');
//     const doctors = await DoctorModel.findById(doctor);
//     console.log(doctor);
//     const doctorAvailability = doctors.availablity.find(day => day.day === selectedDay)
//     console.log(doctorAvailability,"docooooavai");
//     if (!doctorAvailability) {
//       return res.status(400).json({ message: 'Doctor is not available on this day.' });
//     }
//     const bookedAppointments = await AppointmentModel.find({ doctor, time: { $gte: doctorAvailability.time.start, $lte: doctorAvailability.time.end } });
//     const slotStart = new Date(time.getFullYear(), appointmentTime.getMonth(), time.getDate(), doctorAvailability.time.start.substr(0, 2), doctorAvailability.startTime.substr(3, 2), 0);
//     const slotEnd = new Date(slotStart.getTime() + 15 * 60000);
//     const overlappingAppointment = bookedAppointments.find(appointment => {
//       const appointmentStart = new Date(appointment.startTime);
//       const appointmentEnd = new Date(appointmentStart.getTime() + 15 * 60000);
//       return (slotStart >= appointmentStart && slotStart < appointmentEnd) || (slotEnd > appointmentStart && slotEnd <= appointmentEnd);
//     });
//     if (overlappingAppointment) {
//       return res.status(400).json({ message: 'This slot is already booked. Please select another slot.' });
//     }
//     const appointment = new Appointment({ doctorId, patientId, startTime: slotStart.toISOString() });
//     await appointment.save();
//     return res.status(200).json({ message: 'Appointment booked successfully.' });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: `client getSearchDoctor  controller ${error.message}`,
//     });
//   }
// };



const postAppointment = async (req, res) => {
  try {
    const { date, time, doctor,consultationFees, client } = req.body;
    
console.log(date, time, doctor,consultationFees, client,"poooo");
   const apointmentCount =  await AppointmentModel.find({doctor:doctor,date:date})

    const selectedDay = moment(date).format('dddd')

    const doctors = await DoctorModel.findById(doctor);
    
    console.log(doctors.consultationFees  );
    const availability = doctors.availablity.find(day => day.day === selectedDay)

  

    if(availability.slots < apointmentCount.length){
      res
        .status(200)
        .send({
          message: "The selected slot is no longer available.",
          success: false,
        });
      return;
    }

const toTime = moment(time).format(" h:mm a")
    const newAppointment = new AppointmentModel({
      date,
      time:toTime,
      doctor,
      consultationFees,
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

  try{


    const { doctorId, selectedDate } = req.params;
    console.log( doctorId, selectedDate );
    const selectedDay = moment(selectedDate).format('dddd'); // convert selected date to day
    const doctor = await DoctorModel.findById(doctorId);
    console.log(doctor);
    const availability = doctor.availablity.find(day => day.day === selectedDay);
    
    console.log(availability);
    if (!availability) {
      res
        .status(200)
        .send({
          message: "Doctor is not available on this day.",
          success: false,
        });
      return;
      // return res.status(404).json({ message: 'Doctor is not available on this day',success: false });
    }
    // return availability for selected day
    res.status(201).send({availability,success:true});

    // res.json(availableSlots);
  } catch(error){
 console.log(error);
    res.status(500).send({
      success: false,
      message: `client getSearchDoctor  controller ${error.message}`,
    });
  }
};

module.exports = {
  getClietProfile,
  patchUpdateClientDetails,
  getdepartments,
  getDepartmentDoctors,
  getDoctorDetails,
  getSearchDoctor,
  getExperiencedDoctors,
  postAppointment,
  availableSlot,
};
