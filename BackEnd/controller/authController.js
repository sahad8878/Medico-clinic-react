const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const validator = require('validator');

const ClientModel = require('../model/clientModel');

// client signup
// eslint-disable-next-line consistent-return
const signupController = async (req, res) => {
  try {
    const {
      name, email, password, number,
    } = req.body;
    if (name && email && password && number) {
      // validation
      if (!validator.isEmail(email)) {
        return res
          .status(200)
          .send({ message: 'Email is not valid', success: false });
      }
      if (!validator.isStrongPassword(password)) {
        return res
          .status(200)
          .send({ message: 'Password not strong enough', success: false });
      }

      // eslint-disable-next-line object-shorthand
      const existingClient = await ClientModel.findOne({ email: email });
      if (existingClient) {
        return res
          .status(200)
          .send({ message: 'Client Already Exist', success: false });
      }
      const salt = await bcrypt.genSaltSync(10);
      const hashedPassword = await bcrypt.hash(password.trim(), salt);
      const newClient = new ClientModel({
        // eslint-disable-next-line object-shorthand
        name: name,
        // eslint-disable-next-line object-shorthand
        email: email,
        password: hashedPassword,
      });
      await newClient.save();
      res.status(201).send({ message: 'signup successfully', success: true });
    } else {
      return res
        .status(200)
        .send({ message: 'All fields must be filled', success: false });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: `Signup controller ${error.message}` });
  }
};

// Client Login

// eslint-disable-next-line consistent-return
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const client = await ClientModel.findOne({ email });
      if (!client) {
        return res
          .status(200)
          .send({ message: 'User not found', success: false });
      }
      const isMatch = await bcrypt.compare(password, client.password);
      if (!isMatch) {
        return res
          .status(200)
          .send({ message: 'Invalid Email or Password', success: false });
      }
      const clientToken = jwt.sign(
        // eslint-disable-next-line no-underscore-dangle
        { id: client._id },
        process.env.JWT_SECRET,
        {
          expiresIn: '1d',
        },
      );
      const clientName = client.name;
      res
        .status(200)
        .send({
          message: 'Login success',
          success: true,
          clientName,
          clientToken,
        });
    } else {
      return res
        .status(200)
        .send({ message: 'All fields must be filled', success: false });
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

// eslint-disable-next-line consistent-return
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const admin = await ClientModel.findOne({ email, isAdmin: true });
      console.log(admin);
      if (!admin) {
        return res
          .status(200)
          .send({ message: 'Admin not found', success: false });
      }
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
        return res
          .status(200)
          .send({ message: 'Invalid Email or Password', success: false });
      }
      const adminToken = jwt.sign(
        // eslint-disable-next-line no-underscore-dangle
        { id: admin._id },
        process.env.JWT_SECRET,
        {
          expiresIn: '1d',
        },
      );
      const AdminEmail = admin.email;
      res
        .status(200)
        .send({
          message: 'Login success',
          success: true,
          AdminEmail,
          adminToken,
        });
    } else {
      return res
        .status(200)
        .send({ message: 'All fields must be filled', success: false });
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
