import mongoose from "mongoose";
import { env } from "./env";

export const connectDB = async()=> {
    try{
        await mongoose.connect(env.MONGODB_URI)
        console.log("Connected to the database sucessfully!")
    }
    catch(err){
        console.log("Sth wrong when try to connect to the Database", err);
        process.exit(1);
    }
}