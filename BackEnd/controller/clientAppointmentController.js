
const  AppointmentModel = require("../model/appointmentModel");

const getClientNotifications = async(req, res) => {
try{

    const clientId = req.body.userId
console.log(clientId);

    const notification = await AppointmentModel.find({client:clientId,status:{$nin:["pending","confirmed"]}}).sort({updatedAT:1})

  console.log(notification);

    if(notification){

        res.status(201).send({notification, success: true });
    }else{
        return res
        .status(200)
        .send({ message: "No notifications Exist  ", success: false });
    }
}catch(error){

    console.log(error);
    res.status(500).send({
      success: false,
      message: `getClientNotifications controller ${error.message}`,
    });
}
}


const patchConfirmAppointment = async(req, res) => {
try {
    console.log(req.body);
    const appointmentId = req.body.appointmentId
    console.log(appointmentId);
    const appointment = await AppointmentModel.findByIdAndUpdate(
        appointmentId,
        { status: "confirmed" },
        { new: true }
      );
      console.log(appointment);
      if (appointment) {
        res.status(201).send({
          message: `Your Booking has been confirmed`,
          success: true,
        });
      } else {
        return res.status(200).send({
          message: `appointment  doesnot exist`,
          success: false,
        });
      }
}catch(error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `patchConfirmAppointment controller ${error.message}`,
    });

}
}

const getConfirmedAppointments = async(req, res) => {
try{

    const clientId = req.body.userId

const confirmedAppointments = await AppointmentModel.find({client:clientId,status:{$in:["confirmed",]}}) .populate("doctor")
.sort({ updatedAt:-1 });
if(confirmedAppointments){

  res.status(201).send({confirmedAppointments, success: true });
}else{
  return res
  .status(200)
  .send({ message: "No notifications Exist  ", success: false });
}

}catch(error){
    console.log(error);
    res.status(500).send({
      success: false,
      message: `getConfirmedAppointments controller ${error.message}`,
    });

}

}

module.exports = {
    getClientNotifications,
    patchConfirmAppointment,
    getConfirmedAppointments

}