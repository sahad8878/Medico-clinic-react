const clientModel = require("../model/clientModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator");

// client signup
const signupController = async (req, res) => {
  try {
    const { name, email, password, number } = req.body;
    if (name && email && password && number) {
      // validation
      if (!validator.isEmail(email)) {
        return res
          .status(200)
          .send({ message: "Email is not valid", success: false });
      }
      if (!validator.isStrongPassword(password)) {
        return res
          .status(200)
          .send({ message: "Password not strong enough", success: false });
      }

      const existingClient = await clientModel.findOne({ email: email });
      if (existingClient) {
        return res
          .status(200)
          .send({ message: "Client Already Exist", success: false });
      } else {
        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password.trim(), salt);
        const newClient = new clientModel({
          name: name,
          email: email,
          password: hashedPassword,
        });
        await newClient.save();
        res.status(201).send({ message: "signup successfully", success: true });
      }
    } else {
      return res
        .status(200)
        .send({ message: "All fields must be filled", success: false });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: `Signup controller ${error.message}` });
  }
};

// Client Login

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const client = await clientModel.findOne({ email: email });
      if (!client) {
        return res
          .status(200)
          .send({ message: "User not found", success: false });
      } else {
        const isMatch = await bcrypt.compare(password, client.password);
        if (!isMatch) {
          return res
            .status(200)
            .send({ message: "Invalid Email or Password", success: false });
        } else {
          const token = jwt.sign({ id: client._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
          });
          res
            .status(200)
            .send({ message: "Login success", success: true, token });
        }
      }
    } else {
      return res
        .status(200)
        .send({ message: "All fields must be filled", success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in LOGIN controller ${error.message}`,
    });
  }
};

// Admin login

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const admin = await clientModel.findOne({ email: email, isAdmin: true });
      if (!admin) {
        return res
          .status(200)
          .send({ message: "Admin not found", success: false });
      } else {
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
          return res
            .status(200)
            .send({ message: "Invalid Email or Password", success: false });
        } else {
          const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
          });
          res
            .status(200)
            .send({ message: "Login success", success: true, token });
        }
      }
    } else {
      return res
        .status(200)
        .send({ message: "All fields must be filled", success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in ADMIN LOGIN controller ${error.message}`,
    });
  }
};

module.exports = { loginController, signupController, adminLogin };
