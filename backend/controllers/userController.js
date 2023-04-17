const User = require("../models/userModel");

const getUser=async(req,res)=>{
    const {username,password}=req.body
    console.log(req.body)
    const user=await User.findOne({ username })
    if(user){
        res.status(400).json("User already exists")
    }
    else{
        console.log("hello1")
        const user = await User.create({
            username,password
          });
res.status(200).json("Signup successfull")
    }
}
module.exports = { getUser };