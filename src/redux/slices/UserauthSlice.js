import { createSlice } from '@reduxjs/toolkit'

import Cookie from 'js-cookie'

export const UserauthSlice = createSlice({
  name: 'Userauth',
  initialState: {
    token:Cookie.get("user_token")||null,
    isAuthenticated:Cookie.get("user_token")!=null?true:false
  },
  reducers: {
    GET_USER_TOKEN:(state,action)=>{
      console.log(action.payload);
        Cookie.set("user_token",action.payload);
        state.token=action.payload;
        state.isAuthenticated=true;
    },
    LOGOUT:(state,ACTION)=>{
      state.token=null;
      state.isAuthenticated=false;
      Cookie.remove("user_token");
    }
  },
})

// Action creators are generated for each case reducer function
export const { GET_USER_TOKEN,LOGOUT } = UserauthSlice.actions

export default UserauthSlice.reducer