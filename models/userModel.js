// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true, lowercase: true },
//     password: { type: String, required: true },
//   },
//   { timestamps: true }
// );
// const User = mongoose.model('user',userSchema);

// module.exports = User;


const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// Hash the password before saving
userSchema.pre('save', async function(next) {
  try {
    // Check if the password is modified or not, only then hash the password
    if (!this.isModified('password')) {
      return next();
    }
  
    // Hash the password using the generated salt
    const hashedPassword = await bcrypt.hash(this.password, saltRounds);
    // Set the hashed password to the password field
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('user', userSchema);

module.exports = User;
