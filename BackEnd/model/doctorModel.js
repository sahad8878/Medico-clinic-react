const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const doctorSchema = new mongoose.Schema(
  {
    fName: {
      type: String,
      required: [true, "fName is required"],
    },
    lName: {
      type: String,
      required: [true, "lName is required"],
    },
    specialization: {
      type: String,
      required: [true, "specialization of birth is required"],
    },
    experience: {
      type: String,
      required: [true, "experience is required"],
    },
    location: {
      type: String,
      required: [true, "location is required"],
    },
    number: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    licenceImg: {
      type: String,
      required: [true, "licence is required"],
    },
    education: {
      type: String,
    },
    address: {
      type: String,
    },
    consultationFees:{
      type:Number
    },

    startingTime: {
      type: String,
    },
    endingTime: {
      type: String,
    },
    availableDate: {
      type: Array,
    },

    doctorImg: {
      type: String,
    },
    status: {
      type: String,
      default: "pending",
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
doctorSchema.plugin(mongoosePaginate);
const doctorModel = mongoose.model("doctors", doctorSchema);
module.exports = doctorModel;
