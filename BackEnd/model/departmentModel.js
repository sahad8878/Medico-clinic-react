const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema(
  {
    department: {
      type: String,
    },
    doctors:[
      { 
         type: mongoose.Schema.Types.ObjectId,
        ref: "doctors",
      },
    ],
    departmentImg: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const departmentModel = mongoose.model("departments", departmentSchema);
module.exports = departmentModel;
