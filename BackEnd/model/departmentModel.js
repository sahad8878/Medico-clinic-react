const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema(
  {
    department: {
      type: String,
    },
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
