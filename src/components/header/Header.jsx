import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';
import ContainerMainMenu from '../mainmenu/ContainerMainMenu';
import Avatar from '../../common/avatar';
import LoginScr from '../test/LoginScr';

const Header = (props) =>{
  return <div className="Header line">
   <div className="NAME">#лучшедома</div>
   <div><input type="text" placeholder="&#128269; Поиск"/></div>
   <LoginScr/>
   </div>
}

export default Header;

   //<NavLink to={"/edittest"}><div><button>Авторизоваться</button></div></NavLink>
