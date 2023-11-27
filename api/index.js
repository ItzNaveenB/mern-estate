import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv";
import UserRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

const app = express();
app.use(express.json())
dotenv.config()

const mongoDBUrl = process.env.MONGO;
mongoose.connect(mongoDBUrl)
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((err) => {
    console.error(`Error connecting to MongoDB: ${err}`)
  });

app.use('/api/user', UserRouter);
app.use('/api/auth', authRouter)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});

app.listen(3000, () => {
  console.log("servert is running on port 3000!")
});