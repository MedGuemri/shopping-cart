import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    Card,
    Input, 
    Button,
    Typography,
  } from "@material-tailwind/react";
import { register, reset } from '../features/auth/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';






const Register = () => {
  const [userData, setUserData]=useState({})
  const  { user, error, loading, message } = useSelector(state => state.auth);

 
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const addUser=(e)=>{
    e.preventDefault()
    dispatch(register(userData))
    if(error){
     
    
  }

  }
  useEffect(()=>{

    if(user )
    navigate('/ProductsList')

    if(error){
        toast.error(error.msg)
        dispatch(reset())
    }
 
   
},[user,error])

    
  return (
    <div  className="flex justify-center flex-col items-center   ">
    
        <Card className='pt-[100px]' color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 min-h-screen  max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" onChange={(e)=>setUserData({...userData, name:e.target.value})}  />
          <Input size="lg" type="email"  required label="Email" onChange={(e)=>setUserData({...userData, email:e.target.value})} />
          <Input type="password" size="lg" label="Password" onChange={(e)=>setUserData({...userData, password:e.target.value})} />
        </div>
       
        <Button className="mt-6 text-slate-700  font-extrabold bg-yellow-500" fullWidth  onClick={addUser}>
          Register
        </Button>
       
      </form>
    </Card>
    </div>
  )
}

export default Register