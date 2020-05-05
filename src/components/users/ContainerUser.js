import React from 'react';
import { getUserThunkCreator, unfollowThunkCreator,followThunkCreator} from '../../redux/reducerUser';
import {connect} from 'react-redux';
import Users from './Users';
import {compose} from 'redux';

class ControlUsers extends React.Component{

    componentDidMount(){
      this.props.getUserThunkCreator(this.props.userList.currentPage,this.props.userList.pageSize)
      }

    componentDidUpdate(){
      //    alert('Updated!!');
    }

    render(){
      //https://social-network.samuraijs.com/api/1.0/users
      //http://192.168.1.141:1925/1/channels/
      return <Users totalCount={this.props.userList.totalCount}
                pageSize={this.props.userList.pageSize}
                followingInProgress={this.props.userList.followingInProgress}
                items={this.props.userList.items}
                isFetchingUsers={this.props.userList.isFetchingUsers}
                currentPage={this.props.userList.currentPage}
                loadData={this.loadData}
                ip={this.props.userList.ip}
                onChange={this.props.onChange}
                getUserThunkCreator={this.props.getUserThunkCreator}
                followThunkCreator={this.props.followThunkCreator}
                unfollowThunkCreator={this.props.unfollowThunkCreator}
                />;
              }
}




let mapStateToProps=(state)=>{
  return{
      userList:state.userList
  }
}




export default compose (
  connect(mapStateToProps,{getUserThunkCreator,unfollowThunkCreator,followThunkCreator,})
)
(ControlUsers);
