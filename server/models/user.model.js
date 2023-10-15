import mongoose from 'mongoose';

// create user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
}, { timestamps: true }); // auto create 'createdAt' and 'updatedAt' properties

const User = mongoose.model('User', userSchema);

export default User; // for use in anywhere needed