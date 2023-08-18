import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

const user=JSON.parse(localStorage.getItem('user'));
 
const initialState={
   
    user:user?user:null,
    loading:false,
    success:false,
    error:null,
    message:""

}



export const register = createAsyncThunk('auth/register',

    async (user, ThunkAPI) => {


        try {
            const response = await axios.post('http://localhost:8000/api/user/register', user)

            if (response.data) {
                localStorage.setItem('user', JSON.stringify(response.data))

            }
            return response.data
        } catch (error) {

            return ThunkAPI.rejectWithValue(error.response.data)

        }

    })

export const login = createAsyncThunk('auth/login',async(user,thunkAPI)=>{
    try {const response = await axios.post("http://localhost:8000/api/user/login", user)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }

})

export const logout =createAsyncThunk("auth/logout", async(user, thunkAPI)=>{
    localStorage.removeItem('user')
    return null
})


export const authSlice=createSlice({

    name:'auth',
    initialState,
    reducers:{
        reset:(state)=>{
            state.loading=false;
            state.success=false;
            state.error=null;
            state.message="";
        }

      

    },
    extraReducers:(builder)=>{

        builder.addCase(register.pending,(state)=>{

            state.loading=true;

        }).addCase(register.fulfilled,(state,action)=>{
            state.loading=false;
            state.success=true;
            state.user=action.payload;
            state.message="User registered successfully"

        }
        ).addCase(register.rejected,(state,action)=>{

            state.error=action.payload;
            state.loading=false;
            state.success=false;
            state.message="User registration failed"
        }
        ).addCase(login.pending,(state)=>{
            state.loading=true
        }).addCase(login.fulfilled,(state,action)=>{
            state.loading=false
            state.success=true
            state.user=action.payload
            state.message="user logged successfully"
        }).addCase(login.rejected,(state,action)=>{
            state.error=action.payload
            state.loading=false
            state.success=false
            state.message="user login failed"
        }).addCase(logout.fulfilled,(state,action)=>{
            state.loading=false
            state.success=true
            state.user=null
            state.message="user loggedout successfully"
        }).addCase(logout.rejected,(state,action)=>{
            state.loading=false
            state.success=true
            state.error=action.payload
            state.message="user loggedout failed"})



    }


})

export const {reset}=authSlice.actions;
export default authSlice.reducer;