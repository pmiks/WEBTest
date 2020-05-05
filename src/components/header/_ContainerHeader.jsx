import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import {logoutThunkCreator} from '../../redux/reducerAuth';


class ContainerHeader extends React.Component{
  render(){
    return <Header {...this.props}/>
   };
}

  const mapStateToProps=(state)=>{
    return{me:state.me}
  };



  export default connect(mapStateToProps,{logoutThunkCreator})(ContainerHeader)
