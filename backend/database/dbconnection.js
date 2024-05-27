import  mongoose  from "mongoose";


export const dbconnection=()=>{
  mongoose.connect(process.env.MONGO_URI,{
    dbName:"HOSPITAL_SYSTEM"
  })
  .then(()=>{
    console.log("connect")
  })
  .catch((err)=>{
    console.log(`error: ${err}`);
  })
} 