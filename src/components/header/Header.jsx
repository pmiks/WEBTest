import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';
import ContainerMainMenu from '../mainmenu/ContainerMainMenu';
import Avatar from '../../common/avatar';
import LoginScr from '../test/LoginScr';

import logo from '../../assets/images/Yes_i_64.png'

const Header = (props) =>{
  return <div className="Header line">
   <div className="logo"><div><NavLink to={"/"}><img src={logo} alt="logo" height="40px"/></NavLink></div><div className="NAME">#лучшедома</div></div>
   <div><input style={{"width":"10em"}} type="text" placeholder="&#128269; Поиск"/></div>
   <div></div>
   <LoginScr/>
   </div>
}

export default Header;

   //<NavLink to={"/edittest"}><div><button>Авторизоваться</button></div></NavLink>
