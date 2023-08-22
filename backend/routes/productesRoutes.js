const router = require('express').Router()
const productController = require('../controllers/productesControllers')
const isAdmin =require("../middleware/adminMiddleweare")




router.get('/products',productController.getProducs)
router.get('/product/:id',productController.getProduct)
router.post('/addProduct',isAdmin,productController.addproduct)
router.post('/updateProduct/:id',isAdmin,productController.updateProduct)
router.delete('/deleteProduct/:id',productController.deleteProduct)

module.exports=router