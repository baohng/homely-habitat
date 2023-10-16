import User from "../models/user.model.js";

export const signup = async (req, res) => {
  // destructuring the req.body to save to database
  const { username, email, password } = req.body;
  
  // TODO: encrypt the password before save to db
  const newUser = new User({username, email, password});
  
  // catch the exceptions with user input
  try {
    await newUser.save(); // wait mongoose save data
    res.status(201).json('User created successfully!'); // send announce that user created
  } catch (error) {
    res.status(500).json(error.message);  // send the error to user instead of backend
  }

};
