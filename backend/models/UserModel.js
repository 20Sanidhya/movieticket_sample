const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const userSchema=new Schema({
    username:{
        type:String,
        required:[true,"Please enter your first name"]
    },
    password:{
        type:String,
        required:[true,"Please enter a password"]
    }
},{timestamps:true})
module.exports=mongoose.model("User",userSchema)