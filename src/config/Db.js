import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();


const mongourl = process.env.MONGO_URL;





export const connectDB = async()=>{
    try {
      const connection = await  mongoose.connect(mongourl);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}