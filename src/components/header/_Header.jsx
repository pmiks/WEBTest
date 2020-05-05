import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';
import ContainerMainMenu from '../mainmenu/ContainerMainMenu';
import Avatar from '../../common/avatar';

const Header = (props) =>{
  return <div className="mainheader"><h1>Первый экспериментальный</h1>
  <ContainerMainMenu className="mainmenu1"/>
  {!props.me.id?
    <div className='login'>
      <NavLink to={'/login'}>login</NavLink>
    </div>
  :
    <div className='login'>
      <div><Avatar src={null} size={45}/></div>
      <div><NavLink to={`/profile/${props.me.id}`}>{props.me.login}</NavLink>&emsp;</div>
      <button onClick={props.logoutThunkCreator}>Logout</button>
    </div>
 }
</div>
}

export default Header;
