const mongoose=require("mongoose")

require("dotenv").config();

exports.connectWithDb=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("connection with database successful")
    })
    .catch((error)=>{
        console.log("connection issue")
    })
}