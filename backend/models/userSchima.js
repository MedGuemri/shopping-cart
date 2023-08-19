const mongoose = require("mongoose")



const userSchema=mongoose.Schema({
    name:{type:String, require:true},
    email:{type:String, require:true, unique: true},
    password:{type:String, require:true},
    isAdmin:{
        type:Boolean,
        default:false

    },
    
},{timestamp: true})


module.exports = mongoose.model("user", userSchema)