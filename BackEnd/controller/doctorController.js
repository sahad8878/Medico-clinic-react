const mongoose = require("mongoose");
const DoctorModel = require("../model/doctorModel");
const DepartmentModel = require("../model/departmentModel");
const AppointmentModel = require("../model/appointmentModel");
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
      consultationFees
    } = req.body;

    if (
      education &&
      address &&
      startingTime &&
      endingTime &&
      doctorImg &&
      availableDate && 
      consultationFees
    ) {
      const doctor = await DoctorModel.findByIdAndUpdate(
        req.body.doctorId,
        {
          $set: {
            education,
            address,
            startingTime,
            endingTime,
            doctorImg,
            availableDate,
            consultationFees,
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
    doctor = await DoctorModel.findById(req.query.id);
    let doctorStatus;

    if (doctor.block === false) {
      if (doctor.status === "pending") {
        doctorStatus = doctor.status;
      }
      if (doctor.status === "approved") {
        doctorStatus = doctor.status;
      }
      if (doctor.status === "active") {
        doctorStatus = doctor.status;
      }
    } else {
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

// 

const getDoctorDetails = async(req, res) => {

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

}

// find doctor appointment

const getAppointments = async (req, res) => {
  try {
    const pendingAppointments = await AppointmentModel.find({
      doctor: req.query.doctorId,
      status: "pending",
    })
      .populate("client")
      .sort({ updatedAt: -1 });
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
};

// Accept  Appoiontments

const acceptAppointment = async (req, res) => {
  try {
    const appointmen = await AppointmentModel.findByIdAndUpdate(
      req.body.id,
      { status: "approved" },
      { new: true }
    );
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
    const appointmen = await AppointmentModel.findByIdAndUpdate(
      req.body.id,
      { status: "rejected" },
      { new: true }
    );
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

// post doctor schedule 

const postDoctorAvailability = async(req, res) => {
  try {
  console.log(req.body);
  console.log(req.body.doctorId);
const doctorId =req.body.doctorId
  const {selectedDay,timings} = req.body
  console.log(selectedDay,timings);


  const doctorData = await DoctorModel.findOne({_id:doctorId})
  const existingDay = doctorData.availablity.find((day) => day.day === selectedDay);

  if (existingDay) {
    // If the day exists, push the new time slots to its time array
    existingDay.time.push(
      ...timings.map((timing) => ({
        start: new Date(`2023-03-01T${timing.startTime}:00Z`),
        end: new Date(`2023-03-01T${timing.endTime}:00Z`),
      }))
    );
  } else {
    // If the day does not exist, create a new day object and push it to the availability array
    doctorData.availablity.push({
      day: selectedDay,
      time: timings.map((timing) => ({
        start: new Date(`2023-03-01T${timing.startTime}:00Z`),
        end: new Date(`2023-03-01T${timing.endTime}:00Z`),
      })),
    });
  }
  
  const doctor = new DoctorModel(doctorData);
  await doctor.save();
  console.log(doctor);
  if(doctor){

    res.status(201).send({message:"Your Time schedule added ", success: true });
  }else{
    return res
    .status(200)
    .send({ message: "No doctor Exist  ", success: false });

  }
 
  // const newDay = {
  //   day: selectedDay,
  //   time: timings.map(timing => {
  //     return {
  //       start: new Date(`2000-01-01T${timing.startTime}:00.000Z`),
  //       end: new Date(`2000-01-01T${timing.endTime}:00.000Z`)
  //     };
  //   })
  // };
  // const doctor = await DoctorModel.findOne({_id:doctorId})
  // console.log(doctor)
  // const dayExists = doctor?.availablity?.findIndex((element)=>element.day === selectedDay)
  // console.log(`dayExists: ${dayExists}`)
  // if(dayExists != -1){
  //   console.log(newDay?.time?.length,'[[[[[[[[[[[[[[[[[[[[[[[[[')
  //   for(let i=0; i<= newDay?.time?.length -1; i++){
  //     doctor?.availablity[dayExists]?.time?.push(newDay?.time[i])
  //     doctor?.save();
  //     console.log('pushed to time')
  //   }
  // }else{
  //   doctor?.availablity?.push(newDay);
  //   doctor?.save();
  //   console.log('pushed to array')
  // }
 
  // });
  

} catch (error) {
  console.log(error);
  res.status(500).send({
    success: false,
    message: `postDoctorAvailability controller ${error.message}`,
  });
}
}


const getScheduleDetails = async (req, res) => {
try {
  
const doctor = await DoctorModel.findOne({_id:req.body.doctorId})
console.log(doctor);

const schedule = doctor.availablity
console.log(schedule);
if(schedule){

  res.status(201).send({schedule, success: true });
}else{
  return res
  .status(200)
  .send({ message: "No doctor Exist  ", success: false });

}


} catch (error) {
    console.log(error);
  res.status(500).send({
    success: false,
    message: `postDoctorAvailability controller ${error.message}`,
  });
}

}


const  deleteScheduleTime = async(req, res) => {
try {
  console.log(req.query.timingId);
  const doctorId = req.body.doctorId
const timingId = req.query.timingId
 const doctor = await DoctorModel.findOne({ _id: doctorId })
  
 if(!doctor){

  return res
  .status(200)
  .send({ message: " doctor not Exist  ", success: false });

 }else{
  doctor.availablity.forEach((day) => {
    day.time.pull({ _id: timingId }); // remove the timing with the given ID
  });

  doctor.save().then(()=>{

    res.status(201).send({message:"Your Timing is removed", success: true });
  })

 }
 
//  (err, doctor) => {
//     if (err) {
//       // handle error
//     } else if (!doctor) {
//       // handle doctor not found
//     } else {
//       // remove the timing object from the availablity array
//       doctor.availablity.forEach((day) => {
//         day.time.pull({ _id: timingId }); // remove the timing with the given ID
//       });
  
//       // save the updated doctor document
//       doctor.save((err) => {
//         if (err) {
//           // handle error
//         } else {
//           // handle success
//         }
//       });
//     }
//   });
  
} catch (error) {
  console.log(error);
  res.status(500).send({
    success: false,
    message: `postDoctorAvailability controller ${error.message}`,
  });
}

}
module.exports = {
  getDepartments,
  doctorDetails,
  doctorStatusChecking,
  getDoctorDetails,
  getAppointments,
  acceptAppointment,
  rejecrAppointment,
  postDoctorAvailability,
  getScheduleDetails,
  deleteScheduleTime
};
