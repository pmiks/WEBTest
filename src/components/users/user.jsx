import React from 'react';
import {NavLink} from "react-router-dom";
import Avatar from '../../common/avatar'

const User=({user,inProgress,unfollow,follow})=>{

  return <div className="channList">
              <Avatar src={user.photos.small} size={100}/><div>
              <NavLink to={'/profile/'+user.id}><div className="username">  {user.name} </div></NavLink>
              <div>  {user.id} </div>
              <div>  {user.uniqueUrlName} </div>
              <div>  {user.status} </div>
              {user.followed?
                <button className="btnFlw" disabled={inProgress.some(id=>id===user.id)}
                onClick={()=>{unfollow(user.id)}}>Отписаться</button>:
                 <button className="btnFlw" disabled={inProgress.some(id=>id===user.id)}
                 onClick={()=>{follow(user.id)}}>Подписаться</button>
              }
            </div>
            </div>
}

export default User;
