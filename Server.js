const express=require("express")
const app=express()
const connectDB=require("./config/db")
require('dotenv').config()
const Trouter=require("./routes/Task")
const router=require("./routes/User")


app.use(express.json())
app.use("/api",Trouter)
app.use("/api",router)
const URL=process.env.MONGO_URI


app.get("/",(req,res)=>{
    res.send("Hello World")
})
const PORT=process.env.PORT
app.listen(PORT ,async()=>{
    await connectDB(URL) 
    console.log(`Server is Running on The Port ${PORT}`)
})
