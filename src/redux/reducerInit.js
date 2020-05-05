import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';
import {getAuthInfoThunkCreator,logoutThunkCreator} from './reducerAuthVK';
import {getTestsListThunkCreator} from './reducerTests2';

const INITIALIZATION_SUCCESS='INITIALIZATION_SUCCESS';

export const initializationAC=(isInit)=>({type:INITIALIZATION_SUCCESS,isInit:isInit});

export const initializeAppThunkCreator=()=>{
  return (dispatch)=>{
    let prAuth=dispatch(getAuthInfoThunkCreator());
    let prTL=dispatch(getTestsListThunkCreator());
    Promise.all([prTL,prAuth]).then(()=>{
      dispatch(initializationAC(true));
    });
  }
}

let init={
  initialized:false
};


export let reducerInit=(state=init,action)=>{
  switch (action.type) {
    case INITIALIZATION_SUCCESS:
         return{
          ...state,
          initialized:action.isInit
        };
    default:return state;

  }

}
