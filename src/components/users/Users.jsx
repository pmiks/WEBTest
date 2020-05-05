import './Users.css';
import React from 'react';
import Preloader from '../../common/preloader';
import Paginator from '../../common/paginator'
import User from './user';
//import * as axios from 'axios';


let Users=(props)=>{

  if(props.isFetchingUsers){ return <Preloader/>; }
  return <div className="page">
  <div>
      {props.isFetching ?<Preloader/> : null}
      <Paginator  totalCount={props.totalCount}
                  pageSize={props.pageSize}
                  currentPage={props.currentPage}
                  onClick={props.getUserThunkCreator}
                  prevnext={true}
                  startend={true}/>
      {props.items.map(m=>{
        return <User
          user={m}
          inProgress={props.followingInProgress}
          unfollow={props.unfollowThunkCreator}
          follow={props.followThunkCreator}
        />  })}
        <Paginator  totalCount={props.totalCount}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    onClick={props.getUserThunkCreator}
                    prevnext={true}
                    startend={true}/>
    </div>
  <input value={props.ip} onChange={props.onChange}></input>
  <button onClick={()=>{props.loadData()}}>Установить</button>
  </div>
}

export default Users;
