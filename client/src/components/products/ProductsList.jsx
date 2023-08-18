import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProductsList = () => {
  const Products = useSelector((state)=>state.cart.Products)
  const {user}=useSelector((state)=>state.auth)
  const navigate = useNavigate()
  
   useEffect(()=>{
    if(!user){
      navigate("/")

    }
   })


  return (
     
 <div className="flex justify-center flex-col items-center ">
          <h1 className='mt-20 font-bold text-5xl text-slate-700 bg-yellow-300 rounded-2xl p-4'>Products List</h1>


          <div className="  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16  py-20">

            {
              Products.map(product =>{
              return <ProductCard key={product.id} product={product} />})
            }
              
         
          </div>
 </div>
     
  )
}

export default ProductsList