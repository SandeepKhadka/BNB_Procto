const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['student', 'teacher', 'admin', 'superadmin', 'parent'],
    required: true,
    default: 'student'
  },
  status: {
    type: String,
    enum: ['verified', 'unverified'],
    default: 'unverified'
  }
}, { timestamps: true });


const User = mongoose.model('User', userSchema);

module.exports = User;
