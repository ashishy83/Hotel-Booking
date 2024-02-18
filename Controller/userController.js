const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
require('dotenv').config()

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    res.status(200).send({
      message: "User already exists! Please login.",
      User: existingUser,
    });
  }
  sec;

  const hashedPassword = bcrypt.hash(password, saltRounds);
  const newUser = new User({
    name: name,
    email: email,
    password: hashedPassword,
  });
  const result = await newUser.save();
  const resObject = result.toObject();
  delete resObject.password;
  res.send({
    message: "User has been created succesfully.",
    User: resObject,
  });
  const token = jwt.sign(resObject, process.env.SECRET_KEY);
  res.cookie("hotel", 1234, { maxAge: 99999, httpOnly: true });
  res.json(resObject);
  console.log("Token => ", token);
};

//login controller
const login = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email }).select(password);

  if (existingUser) {
    const hashedPassword = existingUser.password;
    const isMatch = await bcrypt.compare(password, hashedPassword);
    if (isMatch) {
      const token = jwt.sign(
        {
          email: existingUser.email,
        },
        config.secret_key
      );
      res.cookie("hotelbooking", token);
      return res.status(200).json({
        token: token,
        message: "Logged in successfully.",
      });
    } else {
      res.send(401).json({
        message: "Incorrect Password!",
      });
    }
  } else {
    res.status(401).json({
      message: "User is not registered, try registering.",
    });
  }
};

const resetPassword = async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const user = await User.findOneAndUpdate(
    {
      email: email.lowerCase(),
    },
    {
      password: hashedPassword,
    },
    {
      new: true,
    }
  );
  if (user) {
    res.status(200).json({
      message: "Password updated successfully",
    });
  } else {
    res.status(401).json({ message: "Email does not exist." });
  }
};

module.exports = { register, login, resetPassword};

// function to register a new user in the database
