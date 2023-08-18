const productModel = require('../models/productSchima')


const productController = {
    getProducs: async (req, res) => {
        try {
            const products = await productModel.find();
            res.status(200).json({ products });
        } catch (error) {


            res.status(500).json({ error: "An error occurred" });
        }

    },
    getProduct: async (req, res) => {
        try {
            const product = await productModel.findById(req.params.id);

            if (!product) {
                return res.status(404).json({ msg: "Product not found" });
            }

            res.json(product);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "An error occurred" });
        }

    },
    addproduct:async(req,res)=>{

        try {
            
            const {title,imgLink,descreption,price}=req.body
            const product = await productModel.findOne({title})
            if(product){
                return res.status(400).json({error:"product is already exsite "})
            }
            const newProduct= await productModel.create({
                title,
                imgLink,
                price,
                descreption
            })
            if(!newProduct){
                return res.status(400).json({msg:"productnot created  "})
            }
            res.status(200).json({
                title:newProduct.title,
                imgLink:newProduct.imgLink,
                price:newProduct.price,
                descreption:newProduct.descreption,
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "An error occurred" });
        }


    },
    updateProduct: async(req, res) => {
        try {
            const updatedProduct = await productModel.findByIdAndUpdate({ _id: req.params.id }, { $set: { ...req.body } })
            if (!updatedProduct) {
                return res.status(404).json({ msg: "product not found" })
            }
            res.json(updatedProduct)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "error" })

        }
    },
    deleteProduct:async(req,res)=>{
        try {
            
            const deletedProduct = await productModel.findByIdAndDelete(req.params.id)
            if(!deletedProduct){
                return res.status(400).json({msg:"product not found"})
            }
            res.json({msg:"product deleted seccessfuly"})

        } catch (error) {
             console.log(error);
            res.status(500).json({ error: "An error occurred" });
        }
    },
 

}

module.exports = productController