import { createSlice } from '@reduxjs/toolkit'

import Cookie from 'js-cookie'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token:Cookie.get("token")||null,
    isAuthenticated:Cookie.get("token")!=null?true:false
  },
  reducers: {
    GET_TOKEN:(state,action)=>{
      console.log(action.payload);
        Cookie.set("token",action.payload);
        state.token=action.payload;
        state.isAuthenticated=true;
    },
    LOGOUT:(state,ACTION)=>{
      state.token=null;
      state.isAuthenticated=false;
      Cookie.remove("token");
    }
  },
})

// Action creators are generated for each case reducer function
export const { GET_TOKEN,LOGOUT } = authSlice.actions

export default authSlice.reducer