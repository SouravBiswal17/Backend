import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";
import express from "express"


const connectDB =async ()=>{
    try {
      const connectionInstane = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`\n MongoDB connected!! DB HOST:
         ${connectionInstane.connection.host}`);
    } catch (error) {
        console.log("MONGODB Connection error ",error);
        process.exit(1)
        
    }
}


export default connectDB