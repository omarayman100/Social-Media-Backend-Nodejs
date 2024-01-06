import mongoose from "mongoose";

export default function dbConnection() {
   return mongoose.connect(process.env.DB_CONNECTION)
    .then(()=>{
        console.log('db connection established successfully');
    })
    .catch((err)=>{
        console.log('db connection error',err);
    })
}