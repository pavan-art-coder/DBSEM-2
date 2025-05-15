const express=require("express")
const UserSchema=require("../models/User")
const router=express.Router()

router.post('/users',async(req,res)=>{
    const {name,email}=req.body
    try{
        if(!name || !email){
            res.status(400).json({message:"Enter Valid Crendtials "})
        }

        const Email=await UserSchema.findOne({email})
        if(Email){
            res.status(400).json({message:"User Already Exist"})
        }
        const newUser=await UserSchema.create({
            name,
            email,
        })
        res.status(201).json({message:"User Registered Succesfully",User:newUser})

    }
    catch(error){
        res.status(500).json({error:"Error In Server"})
    }
})

module.exports=router