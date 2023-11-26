import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv";

const app = express();
dotenv.config()

const mongoDBUrl = process.env.MONGO;
mongoose.connect(mongoDBUrl)
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((err) => {
    console.error(`Error connecting to MongoDB: ${err}`)
  });
// const db = mongoose.connection;

app.listen(3000, () => {
  console.log("servert is running on port 3000!")
});