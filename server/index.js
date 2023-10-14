import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';  // package for using .env file

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log(`Connected to MongoDB`);
  })
  .catch((err) => {
    console.log(err);
    console.log(`Unconnected to MongoDB`);
  });

const PORT = 3000;
const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
  }
);