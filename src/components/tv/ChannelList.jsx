import './ChannelList.css';
import React from 'react';
import Slider from '../../common/slider';
import {tvAPI} from '../../api/api';

const ChannelList=(props)=>{

  let setchannel=(e)=>{
    tvAPI.setChannel(e.target.id);
//     alert(e.target.id);
  }

  return <div>
  <button onClick={()=>{tvAPI.setVolume(10)}}>Установить громкость</button>
  <button onClick={()=>{tvAPI.setMute(false)}}>Включить звук</button>
  <button onClick={()=>{tvAPI.setMute(true)}}>Выключить звук</button>
  <div>Список каналов</div>
    {props.channels&&props.channels
       .map(p=>{return <div className="channellist" ><div className="preset">{p[1].preset}</div>
        <div id={p[0]} className="name" onClick={setchannel}>{p[1].name}</div></div>})}

  <div><Slider/></div>
  </div>


}

export default ChannelList;
