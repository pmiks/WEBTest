import React from 'react';
import {NavLink} from 'react-router-dom';
import './LoginScr.css';
import {connect} from 'react-redux'
import {logoutTC} from '../../redux/reducerAuthVK';

const LoginScr =  ({me,logout}) =>  {
let onLogin=()=>{
  // let resp="https://oauth.vk.com/authorize?client_id=7444329&display=popup&redirect_uri=http://api.electricalab.ru/auth/vk.php&response_type=code&v=5.52";
  // alert(resp);
  // fetch(resp)
  // .then(response => response.json())
  // .then(commits => alert(commits[0].author.login));

}
  return <div className="Login">

    {me.isAuth&&
      <div className="btn">
      <NavLink to={"/edittest"}>
      <div><div >{/*me.last_name*/} {me.first_name}</div><div><img src={me.photo}/></div></div>
      </NavLink>
    </div>}

    {!me.isAuth&&<div>
    <a href="https://oauth.vk.com/authorize?client_id=7444329&display=page&redirect_uri=http://api.electricalab.ru/auth/vk.php&response_type=code&v=5.52"><div onClick={onLogin}>
      <img style={{"max-height":"25px"}} src={window.global.GLOBAL_PATH_SRC+"/images/system/vk.png"}/></div></a>
      </div>}

   {me.isAuth&&<div  className="btn" onClick={logout}>Выход</div>}
  </div>
}


  const mapStateToProps=(state)=>{
    return{
      me:state.me
    }
  };


export default connect( mapStateToProps,
     {
       logout:logoutTC
     }
   )(LoginScr)
