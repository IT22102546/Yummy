import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/auth.route.js"


dotenv.config();
const app = express();
app.use(express.json());


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB')
}).catch((err)=>{
    console.log(err)
});

const corsOptions = {
    origin: 'http://localhost:5173',
  };
app.use(cors(corsOptions));


app.listen(3000 ,() =>{
    console.log('Server Listning on port 3000')
});

app.use("/api/auth",authRoute);