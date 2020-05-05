// https://social-network.samuraijs.com/api/1.0/users
import {userAPI,profileAPI} from '../api/api';

const SET_IP_SOURCE="SET_IP_SOURCE";
const LOAD_CHANEL_LIST="LOAD_CHANEL_LIST";
const TOGGLE_IS_FETCHING="TOGGLE_IS_FETCHING";
const TOGGLE_IS_FETCHING_USERS="TOGGLE_IS_FETCHING_USERS";
const TOGGLE_IS_FETCHING_PROFILE="TOGGLE_IS_FETCHING_PROFILE";
const TOGGLE_IS_FOLLOWING_PROGRESS="TOGGLE_IS_FOLLOWING_PROGRESS";
const SET_CHANNELS="SET_CHANNELS";
const SET_DATA="SET_DATA";
const SET_CURRENT_PAGE="SET_CURRENT_PAGE";
const FOLLOW_USER="FOLLOW_USER";
const UNFOLLOW_USER="UNFOLLOW_USER";
const SET_USER_PROFILE="SET_USER_PROFILE";
const SET_PROFILE_STATUS="SET_PROFILE_STATUS";
const UPDATE_PROFILE_STATUS="UPDATE_PROFILE_STATUS";

export const loadChanelListAC=(data)=>({type:LOAD_CHANEL_LIST,data:data});
export const setIpSourceAC=(ip)=>({type:SET_IP_SOURCE,ip:ip});
export const toggleIsFetchingUsersAC=(isFetchingUsers)=>({type:TOGGLE_IS_FETCHING_USERS,isFetchingUsers:isFetchingUsers});
export const toggleIsFetchingProfileAC=(isFetchingProfile)=>({type:TOGGLE_IS_FETCHING_PROFILE,isFetchingProfile:isFetchingProfile});
export const toggleIsFollowingProgressAC=(inProgress,iduser)=>({type:TOGGLE_IS_FOLLOWING_PROGRESS,inProgress:inProgress,iduser:iduser});
export const setCannelsAC=(items)=>({type:SET_CHANNELS,items:items});
export const setDataAC=(data)=>({type:SET_DATA,data:data});
export const setCurrentPageAC=(page)=>({type:SET_CURRENT_PAGE,page:page});
export const unfollowAC=(id)=>({type:UNFOLLOW_USER,id:id});
export const followAC=(id)=>({type:FOLLOW_USER,id:id});
export const setUserProfileAC=(data)=>({type:SET_USER_PROFILE,data:data});
export const setProfileStatusAC=(status)=>({type:SET_PROFILE_STATUS,status:status});
export const updateProfileStatusAC=(status)=>({type:UPDATE_PROFILE_STATUS,status:status});

export const getUserThunkCreator=(currentPage,pageSize)=>{
return (dispatch)=>{
  dispatch(setCurrentPageAC(currentPage));
  dispatch(toggleIsFetchingUsersAC(true));
  userAPI.getUsers(currentPage,pageSize)
  .then(data=>
    {
      dispatch(setDataAC(data));
      dispatch(toggleIsFetchingUsersAC(false));
    });
  }
}

export const followThunkCreator=(id)=>{
  return (dispatch)=>{
    dispatch(toggleIsFollowingProgressAC(true,id));
    userAPI.follow(id)
    .then(response=>
        {
            if (response.data.resultCode===0){dispatch(followAC(id)); }
            dispatch(toggleIsFollowingProgressAC(false,id));
          });
  }
}

export const unfollowThunkCreator=(id)=>{
  return (dispatch)=>{
    dispatch(toggleIsFollowingProgressAC(true,id));
    userAPI.unfollow(id)
    .then(response=>
        {
            if (response.data.resultCode===0){dispatch(unfollowAC(id)); }
            dispatch(toggleIsFollowingProgressAC(false,id));
          });
  }
}

export const getProfileUserThunkCreator=(id)=>{
return (dispatch)=>{
  profileAPI.getProfile(id)
    .then(response=>
    {
      dispatch(setUserProfileAC(response.data));
    });
  }
}

export const getProfileStatusThunkCreator=(id)=>{
return (dispatch)=>{
  dispatch(toggleIsFetchingProfileAC(true));
  profileAPI.getStatus(id)
  .then(
    response=>{
      dispatch(setProfileStatusAC(response.data));
      dispatch(toggleIsFetchingProfileAC(false));
    });
  }
}

export const updateProfileStatusThunkCreator=(status)=>{
return (dispatch)=>{
  profileAPI.updateStatus(status)
    .then(response=>{
      if (response.data.resultCode===0){debugger
      dispatch(setProfileStatusAC(status));}
    });
  }
}


let userList={
  ip:"https://social-network.samuraijs.com/api/1.0/users",
  items:[{name:'',id:'',uniqueUrlName:'',status:'',followed:false,photos:{small:null,large:null}}],
  profile:null,
  profilestatus:'',
  totalCount: 0,
  error: null,
  pageSize:100,
  currentPage:1,
  isFetchingUsers:false,
  isFetchingProfile:false,
  followingInProgress:[6637,6636]
};

export let reducerUser=(state=userList,action)=>{
  switch (action.type) {
    case SET_IP_SOURCE:
      return {  ...state, ip:action.ip }
    case SET_CURRENT_PAGE:
      return {...state, currentPage:action.page  }
    case SET_DATA:
    return {...state,
      items:action.data.items,
      error:action.data.error,
      totalCount:action.data.totalCount
    }
    case SET_USER_PROFILE:
      return {...state, profile:action.data }
    case FOLLOW_USER:
      return {...state,
      items:state.items.map(u=>{if(u.id===action.id){ return {...u,followed:true} }  return u })
    }
    case UNFOLLOW_USER:
      return {...state,
      items:state.items.map(u=>{if(u.id===action.id){ return {...u,followed:false} }  return u })
    }
    case TOGGLE_IS_FETCHING_USERS:
        return { ...state, isFetchingUsers:action.isFetchingUsers }
    case TOGGLE_IS_FETCHING_PROFILE:
        return { ...state, isFetchingProfile:action.isFetchingProfile }
    case SET_PROFILE_STATUS:
        return { ...state, profilestatus:action.status}
    case TOGGLE_IS_FOLLOWING_PROGRESS:
        return {  ...state,
        followingInProgress:action.inProgress
        ?[...state.followingInProgress, action.iduser]
        :state.followingInProgress.filter(id=>id===action.iduser)
        }
    default:return state;
  }
}
