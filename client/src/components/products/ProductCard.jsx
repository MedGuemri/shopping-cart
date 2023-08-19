import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import {toggleFav, addToCart , removeFromCart } from '../../features/cart/CartSlice'
import {BiCartAdd} from "react-icons/bi"
import {RiDeleteBin6Line} from "react-icons/ri"
import {MdOutlineFavorite} from "react-icons/md"
import {BsTrashFill} from "react-icons/bs"

const ProductCard = ({product}) => {
   
    const [fav , setFav]= useState(false)
    const [add , setadd]= useState(false)
    const dispatch =useDispatch();


    const handelFav =(productId) =>{
      dispatch(toggleFav({productId}));
      setFav(!fav)
    }
   
    const handelAdd=()=>{
      console.log(product)
      dispatch(addToCart(product));
      setadd(true)
    }
    
    const handleRemove=(productId)=>{
      dispatch(removeFromCart({productId}));
      setadd(false)
    }

    const deleteP=()=>{

    }

  return (
    <div className='w-[250px] h-[400px] flex items-center flex-col rounded-lg border-slate-300 border-2 shadow-lg shadow-slate-400  hover:scale-105 duration-500 '>
        <img className='rounded-t-lg h-[40%] ' src={product.imgLink}/>
        <div className='h-[40%] flex items-center flex-col pt-10'>
            
        <h2 className='text-slate-700 text-xl font-bold py-5 '>{product.title}</h2>
        <h3 className='text-slate-700 text-lg font-semibold py-5 '>${product.price}</h3>

        </div>
        <div className='h-[20%] w-full flex items-center justify-around text-slate-700 text-3xl font-semibold pt-0 '>
            <a onClick={()=>handelFav( product._id)} className={fav ?'cursor-pointer text-pink-700':'cursor-pointer hover:text-pink-700' }><MdOutlineFavorite /></a>

            {
              add?
              <a 
                className='cursor-pointer text-red-500'
                onClick={()=> handleRemove(product._id)}
                title='Remove from cart'>

                  <RiDeleteBin6Line />

                </a>

                :

                <a 
                className='hover:text-green-500 cursor-pointer'
                onClick={handelAdd}
                title='Add to cart'>

                  <BiCartAdd />

                </a>
            
            }
             <a 
                className='hover:text-green-500 cursor-pointer'
                onClick={deleteP}
                title='Add to cart'>

                  <BsTrashFill />

                </a>


          



        </div>
    </div>
  )
}

export default ProductCard