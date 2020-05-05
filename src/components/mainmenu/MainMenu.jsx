import React from 'react';
import {NavLink} from "react-router-dom";

const MainMenu = (props) =>{
let MMenu=props.MenuItems.items
    .map(m=>{if (m.enabled) return <div>
                        <NavLink to={m.link}>
                          <div className="menuitem">{m.name}</div>
                      </NavLink></div>});
  debugger;
  return <div className={props.className}>

  {MMenu}
                        </div>
}

export default MainMenu;
