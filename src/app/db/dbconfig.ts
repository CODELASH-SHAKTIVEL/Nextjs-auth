import mongoose  from "mongoose";

export default async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL!); // always present [! in typescript]
        const connection = mongoose.connection;
        connection.on('Connected',()=>{
            console.log("MongoDB connected successfully");
        })
        connection.on('error',(err)=>{
            console.log("Database found error" , +err);
        })
    } catch (error) {
      console.log(error);    
    }
}