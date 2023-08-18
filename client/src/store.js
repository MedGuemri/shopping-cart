import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./features/cart/CartSlice"
import authReducer from "./features/auth/AuthSlice"
import productReducer from "./features/products/productsSlice"


const store = configureStore({
    reducer :{
        cart : cartReducer,
        auth: authReducer, 
        products : productReducer
    }
});

export default store