const DoctorModel = require("../model/doctorModel");
const DepartmentModel = require('../model/departmentModel')



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
      console.log(req.body,"gpppppppppppppp");
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
      ).then(async(doctor) => {
        let spec = doctor.specialization
        if (doctor) {
          let regExp = new RegExp(spec, "i");
          const department = await  DepartmentModel.findOneAndUpdate({ department: { $regex: regExp }},
           {$set:{doctors:doctor._id}},
            {new: true}
            )
  
          res
            .status(201)
            .send({ message: "your details have been saved", success: true });
        } else {
          return res
            .status(200)
            .send({ message: "No doctor exist ", success: false });
        }
        
      })
     
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
    res.status(500).send({
      success: false,
      message: `checkDoctorStatus controller ${error.message}`,
    });
  }
};
module.exports = {
  doctorDetails,
  doctorStatusChecking,
};
