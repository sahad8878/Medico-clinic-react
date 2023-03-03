const  AppointmentModel = require("../model/appointmentModel");

const getClientNotifications = async(req, res) => {
try{

    const clientId = req.body.userId
console.log(clientId);

    const notification = await AppointmentModel.find({client:clientId,status:{$nin:["pending","conformed"]}})

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




module.exports = {
    getClientNotifications

}