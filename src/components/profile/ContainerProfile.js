import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {getProfileUserThunkCreator,getProfileStatusThunkCreator,updateProfileStatusThunkCreator} from '../../redux/reducerUser';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../common/myhocs';
import {compose} from 'redux';


class ContainerProfile extends React.Component{

componentDidMount(){
  let userId=this.props.match.params.userId;
  if (!userId) {userId=this.props.meid};
  this.props.getProfileUserThunkCreator(userId);
  this.props.getProfileStatusThunkCreator(userId);
}

  render(){
    return <Profile {...this.props}/>;
    }

}

const mapStateToProps=(state)=>{
  return {
    profile:state.userList.profile,
    isFetchingProfile:state.userList.isFetchingProfile,
    status:state.userList.profilestatus,
    meid:state.me.id,
    isAuth:state.me.isAuth
  };
}


export default compose(
  connect(mapStateToProps,{getProfileUserThunkCreator,getProfileStatusThunkCreator,updateProfileStatusThunkCreator}),
  withRouter,
  withAuthRedirect
)
(ContainerProfile)
