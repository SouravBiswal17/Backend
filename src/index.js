// require('dotenv').config()
import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({path:'./env'})

const app = express()

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is Running at port: ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGODB connection faild",err);
})










// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// import express from "express";
// const app = express()

// (async () =>{try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  
//     app.on("error",(error)=>{
//         console.log("ERROR: ",error);
//         throw error
//     })

//     app.listen(process.env.PORT,()=>{
//         console.log(`App is Listening on port ${process.env.PORT}`)
//     })

// } catch (error) {
   
//     console.error("ERROR:",error)
//     throw err
    
// }})()