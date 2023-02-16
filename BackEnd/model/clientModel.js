const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: [true, 'fName is required'],
  },
  lName: {
    type: String,
    required: [true, 'lName is required'],
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'Date of birth is required'],
  },
  age: {
    type: String,
    required: [true, 'age is required'],
  },
  sex: {
    type: String,
    required: [true, 'sex is required'],
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
  clientImage: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  block:{
    type:Boolean,
    default:false,
  }
}, {
  timestamps: true,
});

const clientModel = mongoose.model('clients', clientSchema);
module.exports = clientModel;
