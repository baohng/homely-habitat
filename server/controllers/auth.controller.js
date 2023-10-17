import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res, next) => {
  // destructuring the req.body to save to database
  const { username, email, password } = req.body;

  // encrypt the password
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  
  // catch the exceptions with user input
  try {
    await newUser.save(); // wait mongoose save data
    res.status(201).json('User created successfully!'); // send announce that user created
  } catch (error) {
    next(error);  // send the error to user instead of backend
  }

};
