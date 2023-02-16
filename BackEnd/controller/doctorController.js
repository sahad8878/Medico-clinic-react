const DoctorModel = require('../model/doctorModel')



const doctorDetails = (req, res) => {
    const {education,address,startingTime,endingTime,doctorImg,availableDate} = req.body
    
    if(education&&address&&startingTime&&endingTime&&doctorImg&&availableDate){
        console.log(req.body);


}else{
    return res
    .status(200)
    .send({ message: 'All fields must be filled', success: false });
}



}

module.exports = { doctorDetails};