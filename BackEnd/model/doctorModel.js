const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: [true, 'fName is required'],
  },
  lName: {
    type: String,
    required: [true, 'lName is required'],
  },
  specialization: {
    type: String,
    required: [true, 'specialization of birth is required'],
  },
  experience: {
    type: String,
    required: [true, 'experience is required'],
  },
  location: {
    type: String,
    required: [true, 'location is required'],
  },
  number: {
    type: String,
    required: [true, 'name is required'],
  },
  email: {
    type: String,
    required: [true, 'email is required'],
  },
  password: {
    type: String,
    required: [true, 'password is required'],
  },
 
  education: {
    type: String,
  
  },
  address: {
    type: String,

  },
  startingTime: {
   type: String,    
  },
  endingTime: {
    type: String,    
   },
   doctorImg: {
    type: String,    
   },
   availableDate: {
    type: Array,    
   },
  status:{
    type:String,
    default:"pending"
  },
  block:{
    type:Boolean,
    default:false,
  }
}, {
  timestamps: true,
});

const doctorModel = mongoose.model('doctors', doctorSchema);
module.exports = doctorModel;
