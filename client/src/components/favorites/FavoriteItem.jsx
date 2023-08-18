import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cart/CartSlice';

const FavoriteItem = ({fave}) => {
  
  const [add , setadd]= useState(false)

  const dispatch = useDispatch();
  const addtocart =(productId)=>{
    dispatch(addToCart({productId}));
    setadd(!add)
  }


  return (
    
    <div className='w-[480px] md:w-[600px] h-[350px] flex items-center justify-between rounded-lg border-slate-300 border-2 shadow-lg shadow-slate-400   '>


    <img className='rounded-l-lg w-[40%] h-[60%] ' src={fave.img} />

    <div className='h-full w-[50%] flex items-center  flex-col pt-0'>

        <h2 className='text-slate-700 text-xl mt-0 font-bold py-1 h-[20%] '>{fave.title}</h2>
        <h3 className='text-slate-700 text-lg text-center font-semibold py-1 w-full h-[60%]'>{fave.descreption}</h3>

        <div className='h-[40%] w-full flex flex-col items-center justify-around mb-0 pb-0 text-slate-700 text-3xl font-semibold pt-0 '>
            
            <a 
               onClick={() => addtocart(fave.id)} 
               className={add ? 'cursor-pointer w-[200px]   text-center bg-green-500 items-center p-2 rounded-xl text-xl text-white' : 'cursor-pointer h-[40px] m-2 w-[200px] text-center hover:bg-green-500 bg-yellow-500 items-center p-2 rounded-xl text-lg text-white'}>Add to Cart</a>

        </div>
    </div>
</div>
  )
}

export default FavoriteItem