import React from 'react'
import CartIcon from "./CartIcon"
import { MdFavoriteBorder } from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = () => {
  const cartItems = useSelector((state)=>state.cart.cart)
const nav = [
    {
        
    id :1,
    link : <AiOutlineHome />,
    path :"/" 
   
    },
    {

    id :2,
    link : <MdFavoriteBorder />, 
    path :"/Favorites" 
   
    },
    {

    id :3,
    link :<CartIcon />,
    path :"/Cart",
    
    
   
    }
    

]

  return (
    <div className='w-full h-[60px] fixed z-10 flex items-center justify-evenly md:justify-around bg-yellow-300  text-teal-700 font-bold text-3xl px-[80px] mx-auto '>
        {nav.map(({id,link,path,items})=>{

           return(

               <Link key={id} to={path} > {link} </Link>
           )

        })}
        
    </div>
  )
}

export default NavBar