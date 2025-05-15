const express=require("express")
const TaskSchema=require("../models/Tasks")
const Trouter=express.Router()

Trouter.post('/tasks',async(req,res)=>{
    const {title}=req.body
    const {UserID}=req.params
    
    try{
        if(!title || !UserID){
            res.status(400).json({message:"Enter Valid Crendtials "})
        }

        const User=await TaskSchema.findById({UserID})
        if(!User){
            res.status(500).json({message:"User Not exists "})
        }
        const newTask=await TaskSchema.create({
            title,
            UserID,
        })
        res.status(201).json({message:"Task Added Succesfully",Task:newTask})

    }
    catch(error){
        res.status(500).json({error:"Error In Server"})
        console.log(error.message)
    }
})
module.exports=Trouter