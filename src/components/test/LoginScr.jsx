import React from 'react';
import {NavLink} from 'react-router-dom';
import './LoginScr.css';
import {connect} from 'react-redux'
import {logoutTC} from '../../redux/reducerAuthVK';
import {GLOBAL_PATH_API} from '../../Global'

import logovk from '../../assets/images/iconsn/is_vk_124.png'
import logofb from '../../assets/images/iconsn/is_fb_124.png'
import logogoogle from '../../assets/images/iconsn/is_google_124.png'

const LoginScr =  ({me,logout}) =>  {
  return <div className="Login">

    {me.isAuth&&
      <div className="btn">
      <NavLink to={"/personalarea/mytestresult"}>
      <div><div >{/*me.last_name*/} {me.first_name}</div><div><img src={me.photo}/></div></div>
      </NavLink>
    </div>}

    {!me.isAuth&&<div className="authchoise">
    <a href="https://oauth.vk.com/authorize?client_id=7444329&display=page&redirect_uri=http://api.electricalab.ru/auth/vk.php&response_type=code&v=5.52"><div>
      <img style={{"max-height":"35px"}} src={logovk}/></div></a>
      <div><img style={{"max-height":"35px"}} src={logofb}/></div>
      <div><img style={{"max-height":"35px"}} src={logogoogle}/></div>
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
