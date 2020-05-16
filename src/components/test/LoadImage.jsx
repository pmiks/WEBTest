import React,{ useState }  from 'react';
import './testslist.css'
import {GLOBAL_PATH_API} from '../../Global'

const LoadImage=({img,id,onDel,onLoad,height,width,zoomer,alter})=>{
  const [showBig, setShowBig] = useState(false);

  return <div className={"pic"}>
  {img&&<img style={{ "max-width": `"${width}"`, "max-height": `"${height}"`}}
    src={GLOBAL_PATH_API+'/'+img}
    onClick={()=>{setShowBig(true)}}/>}
    {alter&&!img&&<img style={{height: "auto", width: "auto", "max-width": `"${width}"`, "max-height": `"${height}"`}}
      src={GLOBAL_PATH_API+"/images/system/unnamed.jpg"}
      onClick={()=>{setShowBig(true)}}/>}

  {!img&&onLoad&&<div>
                 <input className="inputfile" type="file" name="image" id={"img"+id} onChange={onLoad}/>
                 <label for={"img"+id}>Выберите файл </label></div>}
  {img&&onDel&&<button onClick={onDel}>Удалить фото</button>}
  {zoomer&&<ShowBigImage img={img} show={showBig} close={()=>{setShowBig(false)}} />}
  </div>

}


const ShowBigImage=({img,show,close})=>{
  if (show) {
  return <div className="ShowBigImageBox" >
  <div className="BlockLayer" onClick={close}></div>
  <div className="ShowBigImage">
      <div onClick={close}><img src={GLOBAL_PATH_API+'/'+img}/></div>
  </div>
  </div>
  }
return <></>
}

export default LoadImage;
