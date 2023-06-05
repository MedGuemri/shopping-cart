import React from 'react'
import {RiDeleteBin6Line} from "react-icons/ri"
import {AiOutlinePlusSquare} from "react-icons/ai"
import {AiOutlineMinusSquare} from "react-icons/ai"
import {decrementQuantity ,incrementQuantity , removeFromCart } from '../../features/cart/CartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({item}) => {

  const {img , id ,quantity , price } = item


const dispatch = useDispatch()


const handleIncrementQuantity = (productId) => {
  dispatch(incrementQuantity({ productId }));
};
const handleDecrementQuantity = (productId) => {
  if (quantity >1 ){
  dispatch(decrementQuantity({ productId }))};
};



const handleRemove =( productId) =>{
  dispatch(removeFromCart( {productId}))
}


  return (
    <div className='w-[450px] md:w-[600px] h-[150px] flex items-center justify-between  border '>
    <img className='h-full w-[30%] ' alt='produit' src={img}/>
    <div className="flex items-center justify-between gap-x-5 px-4 text-2xl text-slate-700 font-semibold  ">
        <div className='flex items-center justify-center gap-x-1 '>

            <button 
                       onClick={() => handleIncrementQuantity(id)}
                     className='text-3xl text-white bg-slate-700'>
     
                   <AiOutlinePlusSquare />

            </button>

            <p>{quantity}</p>

            <button 
                      onClick={()=>handleDecrementQuantity(id)} 
                      className='text-3xl'>
      
                    <AiOutlineMinusSquare />

            </button>
        </div>
       
       
        <p className=''>${price * quantity}</p>

        <button  
                onClick={()=>handleRemove(item.id)}  >
                  <RiDeleteBin6Line />
        </button>

    </div>
</div>
  )
}

export default CartItem