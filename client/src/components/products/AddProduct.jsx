import React from 'react'
import {

  Input,
  Typography,
  Button,
  Dialog,
  Card,
  CardBody,
} from "@material-tailwind/react";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addproducts } from '../../features/products/productsSlice';

const AddProduct = () => {
  const { user, error, loading, message } = useSelector(state => state.auth);

  const [addnewproduct, setAddNewProduct] = useState({})
  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false);
  const handleOpen = async () =>{

    setOpen((cur) => !cur);
    setAddNewProduct({ ...addnewproduct, isAdmin: user.isAdmin })
    await dispatch(addproducts(addnewproduct))
  } 

  // const addP = () => {
  //   setAddNewProduct({ ...addnewproduct, isAdmin: user.isAdmin })
  //   dispatch(addproducts(addnewproduct))
  //   handleOpen()
  // }

  return (
    <div>
      <>
        <Button className='w-[300px]  bg-teal-900 hover:bg-teal-700 text-yellow-400  hover:scale-105 duration-500 text-2xl' onClick={handleOpen}>Add New Product</Button>
        <Dialog
          size="xs"
          open={open}
          handler={handleOpen}
          className="bg-transparent mx-auto flex shadow-none"
        >
          <Card className="mx-auto  w-[33rem]">

            <Typography className='mx-auto pt-10' variant="h3" color="black">
              Add new product
            </Typography>

            <CardBody className="flex flex-col mx-auto  w-[500px] gap-4">
              <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex mx -auto flex-col gap-6">
                  <Input size="lg" label="title" onChange={(e) => setAddNewProduct({ ...addnewproduct, title: e.target.value })} />
                  <Input size="lg" label="imgLink" onChange={(e) => setAddNewProduct({ ...addnewproduct, imgLink: e.target.value })} />
                  <Input size="lg" label="descreption" onChange={(e) => setAddNewProduct({ ...addnewproduct, descreption: e.target.value })} />
                  <Input size="lg" label="price" onChange={(e) => setAddNewProduct({ ...addnewproduct, price: e.target.value })} />

                </div>


                <Button onClick={handleOpen} className="mt-6" fullWidth>
                  ADD
                </Button>

              </form>
            </CardBody>
          </Card>
        </Dialog>
      </>















    </div>
  )
}

export default AddProduct