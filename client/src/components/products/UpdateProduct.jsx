import React from 'react'

const UpdateProduct = () => {
    const  { user } = useSelector(state => state.auth);
  return (
    <div>
         <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
       Update Product
      </Typography>
      
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="title" onChange={(e)=>setAddNewProduct({...addnewproduct,title:e.target.value})} />
          <Input size="lg" label="imgLink"onChange={(e)=>setAddNewProduct({...addnewproduct,imgLink:e.target.value})} />
          <Input size="lg" label="descreption" onChange={(e)=>setAddNewProduct({...addnewproduct,descreption:e.target.value})}/>
          <Input size="lg" label="price" onChange={(e)=>setAddNewProduct({...addnewproduct,price:e.target.value})}/>
         
        </div>
     
            
        <Button onClick={addP} className="mt-6" fullWidth>
         save updates
        </Button>
        
      </form>
    </Card>t</div>
  )
}

export default UpdateProduct