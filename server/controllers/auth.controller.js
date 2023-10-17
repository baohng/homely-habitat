import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

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

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, 'User not found!'));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, 'Wrong credential!'));
    }
    const token = jwt.sign({ id: validUser.id }, process.env.JWT_SECRET);
    const {password: pass , ...rest } = validUser._doc;
    res
      .cookie('access_token', token, { HttpOnLy: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

