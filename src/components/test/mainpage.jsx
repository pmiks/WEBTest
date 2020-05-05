import React from 'react';
import './mainpage.css';
import LoadImage from './LoadImage';
import {NavLink} from "react-router-dom";

const TestsList=(props)=>{
  return <div className="TestList">{props.testslist&& props.testslist.map(
    l=>{/*if (props.editMode||l.published)*/
      return <NavLink to={"test/"+l.id}> <div className={!l.published?"TestItem":"TestItem published"}>
                     <img src={window.global.GLOBAL_PATH_SRC+(l.coverimg?l.coverimg:"/images/system/unnamed.jpg")} />
                     <label>{l.testname}</label>
               </div>
               </NavLink>
    }
  )}</div>
}
export default TestsList
