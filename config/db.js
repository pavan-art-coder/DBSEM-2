const mongoose=require("mongoose")

const connectDB=async(URL)=>{
    try{
        await mongoose.connect(URL)
        console.log("DATABASE CONNECTED SUCCESFULLY")
    }
    catch(error){
        console.log("ERROR IN CONNECTING ")

    }
}
module.exports=connectDB