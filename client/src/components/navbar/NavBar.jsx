import React, { useEffect } from 'react'
import CartIcon from "./CartIcon"
import { MdFavoriteBorder } from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BiLogOut } from 'react-icons/bi'
import {logout} from "../../features/auth/AuthSlice"

const NavBar = () => {
  const cartItems = useSelector((state)=>state.cart.cart)
  const {user}=useSelector((state)=>state.auth)
  const navigate=useNavigate()
  const dispatch= useDispatch()
const nav = [
    {
        
    id :1,
    link : <AiOutlineHome />,
    path :"/ProductsList" 
   
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

const loggedout=()=>{
 dispatch(logout())

}
useEffect(()=>{
  if(!user){
    navigate('/')
  }
},[user])

  return (
    <div className='w-full h-[60px] fixed z-10 flex items-center justify-evenly md:justify-around  bg-yellow-300  text-teal-700 font-bold text-3xl px-[80px] mx-auto '>
        {nav.map(({id,link,path,items})=>{

           return(

               <Link key={id} to={path} > {link} </Link>
           )

        })}
       {user && 
        <a className='text-teal-700 font-bold  cursor-pointer text-3xl' onClick={loggedout} variant="text"> <BiLogOut /> </a>
      } 
    </div>
  )
}

export default NavBar