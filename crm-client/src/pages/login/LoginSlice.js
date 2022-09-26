import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoading:false,
    isAuth:false,
    error:''
}

const LoginSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        loginPending:(state)=>{
            state.isLoading=true
        },
        loginSuccess:(state)=>{
            state.isLoading=false
            state.isAuth=true
            state.error=''
        },
        loginFailed:(state,{payload})=>{
            state.isLoading=false;
            state.error=payload
        }

    }
})

const {reducer,actions} = LoginSlice
export const {loginPending,loginSuccess,loginFailed} = actions
export default reducer