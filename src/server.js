

import dotenv from 'dotenv'
import express from 'express'

import app from './app.js';
import { connectDB } from './config/Db.js';

dotenv.config();



const startServer = async()=>{
    try {
        await connectDB();
        app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
    } catch (error) {
        console.log(error);
    }
}


startServer();


