import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {BsPencilSquare} from "react-icons/bs"
import { updateProduct } from '../../features/products/productsSlice';
import {
  Input,
  Typography,
  Button,
  Dialog,
  Card,
  CardBody,
} from "@material-tailwind/react";

const UpdateProduct = ({product}) => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch()
  const [updated, setupdated] = useState(product)
  const [open, setOpen] = React.useState(false);
  const handleOpen =async () =>{
    setOpen((cur) => !cur);
    setupdated({ ...updated, isAdmin: user.isAdmin })
    await dispatch(updateProduct(updated))

  } 
  
  // const addP = async () => {
  //   setupdated({ ...updated, isAdmin: user.isAdmin })
  //    await dispatch(updateProduct(updated))
  //   handleOpen()
  // }
  return (
    <div>
      <>
        <Button className='w-min px-0 mx-0 shadow-none bg-transparent text-teal-900 text-2xl' onClick={handleOpen}><BsPencilSquare /></Button>
        <Dialog
          size="xs"
          open={open}
          handler={handleOpen}
          className="bg-transparent mx-auto flex shadow-none"
        >
          <Card className="mx-auto  w-[33rem]">

            <Typography className='mx-auto pt-10' variant="h3" color="black">
              Update Product
            </Typography>

            <CardBody className="flex flex-col mx-auto  w-[500px] gap-4">
              <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex mx -auto flex-col gap-6">
                  <Input size="lg" label="title" value={updated.title} onChange={(e) => setupdated({ ...updated, title: e.target.value })} />
                  <Input size="lg" label="imgLink" value={updated.imgLink}  onChange={(e) => setupdated({ ...updated, imgLink: e.target.value })} />
                  <Input size="lg" label="descreption" value={updated.descreption}   onChange={(e) => setupdated({ ...updated, descreption: e.target.value })} />
                  <Input size="lg" label="price"  value={updated.price}  onChange={(e) => setupdated({ ...updated, price: e.target.value })} />

                </div>


                <Button onClick={handleOpen} className="mt-6" fullWidth>
                 Save changes
                </Button>

              </form>
            </CardBody>
          </Card>
        </Dialog>
      </>
    </div>
  )
}

export default UpdateProduct