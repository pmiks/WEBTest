import React from 'react'
import Login from './login'
import {connect} from 'react-redux'
import {loginThunkCreator,logoutThunkCreator} from '../../redux/reducerAuth';
import {Redirect}            from 'react-router-dom';
//
// class ContainerLogin extends React.Component{
//
//
//   render(){
//   if (this.props.me.isAuth) return <Redirect to={"/profile"}/>
//     return <Login {...this.props}/>
//    };
// }
//
//   const mapStateToProps=(state)=>{
//     return{me:state.me}
//   };
//
//
//
//   export default connect(mapStateToProps,{loginThunkCreator,logoutThunkCreator})(ContainerLogin)
