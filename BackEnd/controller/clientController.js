const DepartmentModel = require('../model/departmentModel')


const getdepartments = async(req, res) => {

    try {
        const departments = await DepartmentModel.find();
        console.log(departments);
        if (departments) {
          res.status(201).send({ departments, success: true });
        } else {
          return res
            .status(200)
            .send({ message: "No Departments ", success: false });
        }
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: `client getDepartments  controller ${error.message}`,
        });
      }
}


const getDepartmentDoctors = async(req, res ) => {
    try {

        console.log();
        const departments = await DepartmentModel.findById().populate("doctors");
        console.log(departments);
        if (departments) {
          res.status(201).send({ departments, success: true });
        } else {
          return res
            .status(200)
            .send({ message: "No Doctors ", success: false });
        }
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: `client getDepartmentDoctors  controller ${error.message}`,
        });
      }
}

module.exports = { getdepartments,getDepartmentDoctors};
