const mongoose = require("mongoose");
require('dotenv').config()


const uri = process.env.DB_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("App is connect to  MongoDB!");
  } catch (error) {
    console.log("Error Connecting Database=> ", error);
  }
};

module.exports = connectDB;
