const userModel= require("../models/userSchima")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")


const userController={

    register:async(req,res)=>{
        const {name, email,password}=req.body
        if(!name||!email||!password){
            return res.status(400).json({msg:"pls enter all informayions"})
        }
        const user= await userModel.findOne({email})
        if(user){
            return res.status(400).json({msg:"user already existe "})
        }

        const salt=await bcrypt.genSalt(10)
        const hashedPassWord=await bcrypt.hash(password,salt)
        const newUser = await userModel.create({
            name,
            email,
            password: hashedPassWord
        })
        if(!newUser){
            return res.status(400).json({msg:"user not created"})
        }
        res.status(201).json({
            _id:newUser._id,
            name:newUser.name,
            email:newUser.email,
            token:genToken(newUser._id)
        })


    },

    login:async (req,res)=>{
        const {email,password}=req.body
        if(!email||!password){
            return res.status(400).json({msg:"pls enter all informations"})
        }
        const user= await userModel.findOne({email})
        if(!user){
            return res.status(400).json({msg:"user is not existe"})

        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({msg:"password invalide"})
        }
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            token : genToken(user._id)
        })
    },

    me:async(req,res)=>{
        res.status(200).json(req.user)

    }


}

const genToken=(_id)=>{
    return jwt.sign({_id},process.env.JWT_SECRET,{expiresIn:"10d"})
}

module.exports=userController