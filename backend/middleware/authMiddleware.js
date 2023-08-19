const userModel=require("../models/userSchima")
const jwt=require("jsonwebtoken")
require("dotenv").config()


const isAuth=async(req,res,next)=>{
    if(!req.headers.authorization||!req.headers.authorization.startsWith("Bearer")){
        return res.status(400).json({msg :"token unauthorized"})
    }
    
    const token=req.headers.authorization.split(" ")[1]
    if(!token){
        return   res.status(400).json({msg:"token unauthorized"})
    }


    try {

        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        const user=await userModel.findById(decoded._id)
        if(!user){
            return res.status(401).json({msg:"toke is not valid"})
        }
        req.user={
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
        }
        next()
  
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg:"error auth"})
        
    }
}

module.exports=isAuth