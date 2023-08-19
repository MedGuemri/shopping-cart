import React from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addproducts } from '../../features/products/productsSlice';

const AddProduct = () => {
    const  { user, error, loading, message } = useSelector(state => state.auth);

    const [addnewproduct,setAddNewProduct]=useState({})
    const dispatch= useDispatch()

    const addP=()=>{
        setAddNewProduct({...addnewproduct,isAdmin:user.isAdmin})
dispatch(addproducts(addnewproduct))
    }
  return (
    <div>
        <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
       Add new Product
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details of product.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="title" onChange={(e)=>setAddNewProduct({...addnewproduct,title:e.target.value})} />
          <Input size="lg" label="imgLink"onChange={(e)=>setAddNewProduct({...addnewproduct,imgLink:e.target.value})} />
          <Input size="lg" label="descreption" onChange={(e)=>setAddNewProduct({...addnewproduct,descreption:e.target.value})}/>
          <Input size="lg" label="price" onChange={(e)=>setAddNewProduct({...addnewproduct,price:e.target.value})}/>
         
        </div>
     
            
        <Button onClick={addP} className="mt-6" fullWidth>
          ADD
        </Button>
        
      </form>
    </Card>
    </div>
  )
}

export default AddProduct