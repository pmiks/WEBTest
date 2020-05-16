import React from 'react';
import './mainpage.css';

import LoadImage from './LoadImage';
import {NavLink} from "react-router-dom";
import {GLOBAL_PATH_API,GLOBAL_PATH_SITE} from '../../Global'
import Share from '../share/share';
import noimg from '../../assets/images/noimg_yes.png'

const TestsList=(props)=>{
  return <div className="TestList">{props.testslist&& props.testslist.map(
    l=>{/*if (props.editMode||l.published)*/
      return  <div className={!l.published?"TestItem":"TestItem published"}>
              <NavLink to={"test/"+l.id} >
                     <img className="cover" src={(l.coverimg?GLOBAL_PATH_API+'/'+l.coverimg:noimg)} />
                     <label>{l.testname}</label>
               </NavLink>
                     <div className="share"><Share url={GLOBAL_PATH_SITE+'/test/'+l.id} title={l.testname} img={GLOBAL_PATH_API+'/'+l.coverimg} size="30px"/></div>
               </div>
    }
  )}</div>
}
export default TestsList
