import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'


export  const getProducts = createAsyncThunk("products/get",async()=>{
    try {
        const product = await axios.get("http://localhost:8000/api/products/Products")
    return product
    } catch (error) {
        console.log(error)
    }
})

const initialState= {
    productsListe:[],
    status : null
}

const productsSlice=createSlice({
    name:"products",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.status="success";
            state.productsListe=action.payload.data.products
        })

    }
})

export default productsSlice.reducer
