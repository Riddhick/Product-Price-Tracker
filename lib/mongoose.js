import mongoose from "mongoose";

let isConnected=false;
export const connectDB=async()=>{
    mongoose.set('strictQuery',true);

    if(!process.env.MONGODB_URI) return console.log('MONGODB_URI is not defined');
    if(isConnected) return console.log('Using Existing Database');
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        isConnected=true;
        console.log('Database Connected');
    }
    catch(error){
        console.log(error);
    }
}