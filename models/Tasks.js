const mongoose=require("mongoose")

const Schema2=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    descrpition:{
        type:String,
        required:true,
        min:10,
        
    },
    duedate:{
        type:Date,
        required:true,
    },
    status:{
        type:String,
        enum:['pending','completed'],
        default:'pending'
    },
    UserID:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
}]
})

const TaskSchema=mongoose.model("Task",Schema2)
module.exports=TaskSchema