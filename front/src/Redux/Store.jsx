import { configureStore } from "@reduxjs/toolkit";
import authReducer from './AuthSlice'


const appStore=configureStore({
    reducer:{
        auth:authReducer,
    }
})

export default appStore