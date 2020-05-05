import React from "react";
import AddMenu from './addMenuItem';


const Settings=(props)=>{
  let submit=(param)=>{
        props.addMenuItemAC(param.newMenuItem);
  }

  return <div><AddMenu onSubmit={submit}/> </div>;
}


export default Settings;
