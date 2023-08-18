const route= require("express").Router()
const usercontroler=require("../controllers/userControllers")
const isAuth=require("../middleware/authMiddleware")


route.post("/register",usercontroler.register )
route.post("/login",usercontroler.login )
route.get("/me",isAuth,usercontroler.me )


module.exports=route