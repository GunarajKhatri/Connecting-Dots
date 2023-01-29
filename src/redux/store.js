import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/authSlice"
import UserAuthReducer from './slices/UserauthSlice';
export default configureStore({
  reducer: {
    auth:authReducer,
    Userauth:UserAuthReducer
  },
});