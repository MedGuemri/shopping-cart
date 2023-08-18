const express = require('express')
require('dotenv').config()
const mongoose=require("mongoose")
const userRoutes = require("./routes/userRoutes")
const productRoutes = require('./routes/productesRoutes')
const connect=require("./helpers/db Connect")
const cors=require("cors")



connect()
const app = express()
const port = process.env.PORT
app.use(cors())
app.use(express.json())


app.use("/api/products",productRoutes)
app.use("/api/user",userRoutes)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))