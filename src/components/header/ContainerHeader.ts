import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import { AppStateType } from '../../redux/redux-store';
//import {logoutThunkCreator} from '../../redux/reducerAuth';




  const mapStateToProps=(state:AppStateType)=>{
    return{
      me:state.me
    }
  };



export default connect( mapStateToProps,
     {
       //logoutThunkCreator
     }
   )(Header)
