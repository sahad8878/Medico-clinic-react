const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "clients",
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctors",
    },
    status: {
      type: String,
      default: "pending",
    },
    consultationFees: {
      type: Number,
    },
    date: {
      type: String,
    },
  
    time: {
      type: String,
    },
    token: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const appointmentModel = mongoose.model("appointments", appointmentSchema);
module.exports = appointmentModel;
