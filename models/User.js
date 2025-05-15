const mongoose=require("mongoose")

const Schema1=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3
    },
    email:{
        type:String,
        required:true,
        
    },
})

const UserSchema=mongoose.model("User",Schema1)
module.exports=UserSchema