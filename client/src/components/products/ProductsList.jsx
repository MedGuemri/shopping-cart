import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProducts, reset } from '../../features/products/productsSlice'
import AddProduct from './AddProduct'



const ProductsList = () => {
  // const Products = useSelector((state)=>state.cart.Products)
  const {products} = useSelector((state)=>state.products).productsListe
  const {user}=useSelector((state)=>state.auth)
  const {updated}=useSelector(state=>state.products)
  const navigate = useNavigate()
  const dispatch=useDispatch()
   useEffect(()=>{
    if(!user){
      navigate("/")

    }
    
   },[])
   useEffect(()=>{
    dispatch(getProducts())
    dispatch(reset())
   },[updated])


  return (
     
 <div className="flex justify-center flex-col items-center ">
          <h1 className='mt-20 font-bold text-5xl text-slate-700 bg-yellow-300 rounded-2xl p-4'>Products List</h1>


          <div className="  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16  py-20">

            {
              products&&products.map(product =>{ return <ProductCard key={product._id} product={product} />})
            }
              
         
          </div>
          {user?.isAdmin===true? <AddProduct />:null} 
         
 </div>
     
  )
}

export default ProductsList