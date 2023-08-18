import React from 'react'
import {  useSelector } from 'react-redux'
import CartItem from './CartItem'



const Cart = () => {
  const cartItems = useSelector((state)=>state.cart.cart)
  
  const totalprice= cartItems.reduce((sum,item)=> sum +item.price* item.quantity , 0)
 

 
  return (
    <div className='flex flex-col min-h-screen items-center justify-center mx-auto '>
        <h1 className='mt-20 font-bold text-5xl text-slate-700 bg-yellow-300 rounded-2xl p-4'>Shopping Cart</h1>
        <div className=' w-full  grid grid-rows-1 items-center justify-center gap-2 mt-16'>

           {
            cartItems.length <1 ? (<h1 className='tex-2xl text-center font-semibold'>Cart is empty</h1>) 
            
            : 
      
              (cartItems.map(item => {
                return <CartItem key={item.id} item={item} />
              }))}

           <div className="flex items-center justify-between mt-4 border-t-4 w-full font-bold  text-slate-700 text-3xl">
               <p>Total</p>
               <p>${totalprice}</p>
           </div>
        </div>
    </div>
  )
}

export default Cart