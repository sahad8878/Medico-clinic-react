const ClietModel = require('../model/clientModel')

// get Clinet Details
const getClientDetails = async (req, res) => {
try {
    const clients = await ClietModel.find()
    console.log(clients);
      if(clients){
          res.status(201).send({clients, success: true });
      }else{
          return res
          .status(200)
          .send({ message: 'No Clients ', success: false });
      }
} catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: `getClientDetails controller ${error.message}` });
}

}

module.exports = { getClientDetails};
