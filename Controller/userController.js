const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const config = require("../config.js");
require("dotenv").config();

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      // User already exists, send a response indicating that
      return res.status(409).send({
        message: "User already exists! Please login.",
        User: existingUser,
      });
    } else {
      // Hash the password before saving the user
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      // Create a new user with the hashed password
      const newUser = new User({ name, email, password: hashedPassword });
      const savedUser = await newUser.save();
      // Send a response indicating that the user has been successfully registered
      return res.status(201).send({
        message: "User registered successfully!",
        User: savedUser,
      });
    }
  } catch (error) {
    // Handle any errors that occur during the registration process
    console.error("Error registering user:", error);
    return res.status(500).send({
      message: "An error occurred while registering user.",
      error: error.message,
    });
  }
};

// const register = async (req, res) => {
//   const { name, email, password } = req.body;
//   const existingUser = await User.findOne({ email: email });
//   if (existingUser) {
//     res.status(200).send({
//       message: "User already exists! Please login.",
//       User: existingUser,
//     });
//   }

//   const hashedPassword = bcrypt.hash(password, saltRounds);
//   const newUser = new User({
//     name: name,
//     email: email,
//     password: hashedPassword,
//   });
//   const result = await newUser.save();
//   const resObject = result.toObject();
//   delete resObject.password;
//   res.send({
//     message: "User has been created succesfully.",
//     User: resObject,
//   });
//   const token = jwt.sign(resObject, process.env.SECRET_KEY);
//   res.cookie("hotel", 1234, { maxAge: 99999, httpOnly: true });
//   res.json(resObject);
//   console.log("Token => ", token);
// };

//login controller
// const login = async (req, res) => {
//   const { email, password } = req.body;
//   const existingUser = await User.findOne({ email }).select(password);

//   if (existingUser) {
//     const hashedPassword = existingUser.password;
//     const isMatch = await bcrypt.compare(password, hashedPassword);
//     if (isMatch) {
//       const token = jwt.sign(
//         {
//           email: existingUser.email,
//         },
//         config.secret_key
//       );
//       res.cookie("hotelbooking", token);
//       return res.status(200).json({
//         token: token,
//         message: "Logged in successfully.",
//       });
//     } else {
//       res.send(401).json({
//         message: "Incorrect Password!",
//       });
//     }
//   } else {
//     res.status(401).json({
//       message: "User is not registered, try registering.",
//     });
//   }
// };
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    console.log(req.body);
    if (!existingUser) {
      return res.status(401).json({
        message: "User is not registered. Please try registering.",
      });
    }

    const hashedPassword = existingUser.password;
    const isMatch = await bcrypt.compare(password, hashedPassword);

    if (!isMatch) {
      return res.status(401).json({
        message: "Incorrect Password!",
      });
    }

    const token = jwt.sign(
      { email: existingUser.email },
      config.secret_key,
      { expiresIn: "1h" } // Token expires in 1 hour
    );
    // res.cookie("hotelbooking", token);
    // return res.status(200).json({
    //   token: token,
    //   message: "Logged in successfully.",
    // });
    return res
      .cookie("auth-token", token, {
        maxAge: 1000 * 60 * 60 * 24 ,
        sameSite: "lax",
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .json({ message: "Login successful", data: { email, token } });
  } catch (error) {
    console.error("Error during login:", error.message);
    return res.status(500).json({
      message: "An error occurred while logging in.",
      error: error.message,
    });
  }
};

//reset password

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

module.exports = { register, login, resetPassword };

// function to register a new user in the database
