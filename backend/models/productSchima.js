const mongoose = require('mongoose')

const productSchema= mongoose.Schema({
    title:{
        type :String,
        require:true,
        unique :true
    },
    imgLink : {
        type :String,
        reqire : true
    },
    price :{
        type : Number,
        require : true
    },
    descreption:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        default:1
      
    },
    isFav:{
        type:Boolean,
        default:false
    },
}, {timestamp: true})

module.exports=mongoose.model('products',productSchema)