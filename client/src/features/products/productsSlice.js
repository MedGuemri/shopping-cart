import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'


export  const getProducts = createAsyncThunk("products/get",async()=>{
    try {
        const {data} = await axios.get("http://localhost:8000/api/products/Products")
    return data
    } catch (error) {
        console.log(error)
    }
})
export  const addproducts = createAsyncThunk("products/addproducts",async(product,thunkApi)=>{
    try {
        const {data} = await axios.post("http://localhost:8000/api/products/addProduct",product)
    return data
    } catch (error) {
return thunkApi.rejectWithValue(error.response.data)    }
})
export  const delteproduct = createAsyncThunk("products/delteproduct",async(product,thunkApi)=>{
    try {
        const {data} = await axios.delete("http://localhost:8000/api/products/deleteProduct/:id",product)
    return data
    } catch (error) {
return thunkApi.rejectWithValue(error.response.data)    }
})

const initialState= {
    productsListe:[],
    loading:false,
    success:false,
    error:null,
    message:"",
    updated:false
}

export const productsSlice=createSlice({
    name:"products",
    initialState:initialState,
    reducers:{
        reset:(state)=>{
            state.loading=false;
            state.success=false;
            state.error=null;
            state.message="";
            state.updated=false
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.success=true
            state.productsListe=action.payload
        }).addCase(addproducts.fulfilled,(state,action)=>{
            state.loading=false;
            state.success=true;
            state.updated=true;          
            state.message="product added successfuly";
        }).addCase(addproducts.rejected,(state,action)=>{
            state.error=action.payload;
            state.loading=false;
            state.success=false;
            state.message="add failed"
        }).addCase(delteproduct.fulfilled,(state,action)=>{
            state.loading=false;
            state.success=true;
            state.updated=true;          
            state.message="product delted successfuly";
        }
        ).addCase(delteproduct.rejected,(state,action)=>{
            state.error=action.payload;
            state.loading=false;
            state.success=false;
            state.message="delte failed"
        })

    }
})
export const {reset}=productsSlice.actions;

export default productsSlice.reducer
