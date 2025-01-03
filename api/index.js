import express from 'express'
const app = express();
import mongoose from 'mongoose';
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"
import 'dotenv/config'

await mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected!'));

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
app.use(express.json())
app.use('/api',userRouter);
app.use('/api',authRouter);

//ERROR MIDDLEWARE
app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message,
  })
})