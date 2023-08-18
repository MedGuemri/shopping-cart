const router = require('express').Router()
const productController = require('../controllers/productesControllers')




router.get('/products',productController.getProducs)
router.get('/product/:id',productController.getProduct)
router.post('/addProduct',productController.addproduct)
router.post('/updateProduct/:id',productController.updateProduct)
router.delete('/deleteProduct/:id',productController.deleteProduct)

module.exports=router