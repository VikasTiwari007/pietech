const mongoose=require("mongoose");

const user= new mongoose.Schema({
    id:String,
    name:String,
    age:Number
},{timestamps:true})

module.exports=mongoose.model("user",user)