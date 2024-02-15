const express = require("express");

const mongoose = require('mongoose');

const uri = "mongodb+srv://enigmaticwolf83:449ec5cd@cluster0.t3jkx7w.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async() =>{
    try {
        await mongoose.connect(uri);
    } catch (error) {
        console.log("Error Connecting Database=> ",error);
    }
}

module.exports = connectDB;