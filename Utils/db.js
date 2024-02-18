const mongoose = require("mongoose");
const config = require('../config');


const uri = config.DB_Url;
const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("App is connect to  MongoDB!");
  } catch (error) {
    console.log("Error Connecting Database=> ", error);
  }
};

module.exports = connectDB;
