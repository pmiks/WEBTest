import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_MY_AUTH_DATA="SET_MY_AUTH_DATA";


// export const setMyAuthDataAC=(id,login,email,isAuth)=>({type:SET_MY_AUTH_DATA,mydata:{id:id,login:login,email:email,isAuth:isAuth}});
//
//
// export const getAuthInfoThunkCreator=()=>{
//  return (dispatch)=>{
//     return authAPI.getAuthInfo().then(response=>
//       {
//         if (response.data.resultCode===0) {
//           let {id,login,email}=response.data.data;
//           dispatch(setMyAuthDataAC(id,login,email,true));
//       }
//     });
//   }
// }
//
//
// export const loginThunkCreator=(email,password,rememberMe)=>{
//  return (dispatch)=>{
//       authAPI.login({email:email,password:password,rememberMe:rememberMe,captcha:null}).then(response=>
//       {
//         if (response.data.resultCode===0) {
//           dispatch(getAuthInfoThunkCreator()) ;
//       } else {
//         dispatch(stopSubmit("login",{_error:response.data.messages[0]}));
//       }
//     });
//   }
// }
//
// export const logoutThunkCreator=()=>{
//  return (dispatch)=>{
//     debugger;
//     authAPI.logout().then(response=>
//       {
//         if (response.data.resultCode===0) {
//           debugger;
//           dispatch(setMyAuthDataAC(null,null,null,false));
//       }
//     });
//   }
// }
//
//
//
// let Me={
//   id:null,
//   login:null,
//   email:null,
//   isAuth:false
// };
//
//
// export let reducerAuth=(state=Me,action)=>{
//   switch (action.type) {
//     case SET_MY_AUTH_DATA:
//         debugger;
//         return{
//           ...state,
//           ...action.mydata,
//           isAuth:action.mydata.isAuth
//         };
//     default:return state;
//
//   }
//
// }
