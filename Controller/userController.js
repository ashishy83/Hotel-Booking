const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Secret_Key = "qwerty12345"


const register = async(rerq,res) =>{
    const {name,email,password} = rerq.body;
   const existingUser = await User.findOne({email:email});
   if(existingUser){
    res.status(200).send({
        message : "User already exists! Please login.",
        User      : existingUser
    })
   }

   const hashedPassword = bcrypt.hash(password,saltRounds);
   const newUser = new User({name:name, email:email , password:hashedPassword});
   const result = await newUser.save();
   const resObject = result.toObject();
   delete resObject.password;
   res.send({
    message: "User has been created succesfully.",
    User: resObject,
   })
   const token = jwt.sign(resObject,Secret_Key);
   res.cookie('hotel',1234,{maxAge:99999,httpOnly: true});
   res.json(resObject);
   console.log("Token => ",token);
};

module.exports = register;

// function to register a new user in the database