import {authTAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_MY_AUTH_DATA="SET_MY_AUTH_DATA";


export const setMyAuthDataAC=(mydata,isAuth)=>({type:SET_MY_AUTH_DATA,mydata:mydata,isAuth:isAuth});


export const getAuthInfoThunkCreator=()=>{
 return (dispatch)=>{
   debugger;
    return authTAPI.getAuthInfo().then(response=>
      {
        if (response.status===200)
          //console.log(response.data);
           dispatch(setMyAuthDataAC(response.data,true))
           else return false;
        })
//        .finally(()=>{return false});
          //let {id,login,email}=response.data.data;
//          dispatch(setMyAuthDataAC(id,login,email,true));
//      }
//    });
  }
}


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

export const logoutTC=()=>{
 return (dispatch)=>{
    authTAPI.logout().then(response=>
      {
        if (response.data.result===0) {
          dispatch(setMyAuthDataAC({access_token:null,first_name:null,iduser:null,last_name:null, photo:null},false));
      }
    });
  }
}



let Me={
  iduser:null,
  first_name:null,
  last_name:null,
  photo:null,
  isAuth:false
};


export let reducerAuthVK=(state=Me,action)=>{
  switch (action.type) {
    case SET_MY_AUTH_DATA:
        debugger;
        return{...state,
          ...action.mydata,
          isAuth:action.isAuth
        };
    default:return state;

  }

}
