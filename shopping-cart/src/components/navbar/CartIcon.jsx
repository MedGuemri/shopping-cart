import React from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai'

const CartIcon = () => {
  const cartItems = useSelector(state => state.cart.cart);
  const totalQuantity = cartItems.reduce((sum, item)=>sum + item.quantity, 0)

  return (
    <div className="relative">
    {cartItems.length > 0 ? (
      <span className="absolute bg-red-400 rounded-full text-xs text-white px-1 text-center left-7 top-[-4] w-[20px]">
        {totalQuantity}
      </span>
    ) : null}
    <AiOutlineShoppingCart className="text-2xl" />
  </div>
  );
};
export default CartIcon