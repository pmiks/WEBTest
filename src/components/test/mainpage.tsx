import React,{useEffect, FC, CSSProperties} from 'react';
import './mainpage.css';

//import LoadImage from './LoadImage';
import {NavLink} from "react-router-dom";
import {GLOBAL_PATH_API,GLOBAL_PATH_SITE} from '../../Global'
import Share from '../share/share';
import noimg from '../../assets/images/noimg_yes.png'
import { ITest } from '../../redux/interface';
import {PlayerMp3} from '../../common/audio';

type TTestsList={
  testslist:Array<ITest>
  getTestsList:()=>void
}

const TestsList:FC<TTestsList>=({testslist,getTestsList})=>{

  useEffect(() => {
    getTestsList();
    PlayerMp3.clear();
    //PlayerMp3.pause()
  },[]);
  const imgStyle:CSSProperties={
    // maxWidth:`${width}`,
    // maxHeight: `${height}`,
    // height: "auto",
    // width: "auto",
    //backgroundImage:`url(${l.coverimg?GLOBAL_PATH_API+'/'+l.coverimg:noimg})`
  }
  return <div className="TestList">{testslist&&testslist.map(
   (l:ITest,i:number)=>{/*if (props.editMode||l.published)*/
      return  <div className={!l.published?"TestItem":"TestItem published"} key={i}>
              <NavLink className="NavLink" to={"test/"+l.id} >
                    {/* <div className="cover"><img className="coverimg" src={(l.coverimg?GLOBAL_PATH_API+'/'+l.coverimg:noimg)} /></div>*/}
                    {/*<div className="cover" style={{"background":`url(${l.coverimg?GLOBAL_PATH_API+'/'+l.coverimg:noimg})`, "backgroundSize": 'auto 25vw',  "backgroundPosition": 'center'}}></div>*/}
                    <div style={{"backgroundImage":`url(${l.coverimg?GLOBAL_PATH_API+'/'+l.coverimg:noimg})`}} className="cover"></div>
                     <label>{l.testname}</label>
               </NavLink>
                     <div className="share"><Share url={GLOBAL_PATH_SITE+'/test/'+l.id} title={l.testname} img={GLOBAL_PATH_API+'/'+l.coverimg} size="30px"/></div>
               </div>
    }
  )}</div>
}
export default TestsList
