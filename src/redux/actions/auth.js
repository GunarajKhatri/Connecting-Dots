// export const GET_TOKEN=(data)=>{
//     return{
//         type:'GET_TOKEN',
//         payload:data
//     }

import { createAction } from "@reduxjs/toolkit"
export const GET_TOKEN= createAction('auth/GET_TOKEN');
