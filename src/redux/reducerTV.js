//  http://192.168.1.141:1925/1/channels/current
//  http://192.168.1.141:1925/1/input/key
//  http://192.168.1.141:1925/1/sources/current
//  http://192.168.1.141:1925/1/audio/volume

import {tvAPI} from '../api/api';

const UPDATE_CHANNELS="UPDATE_CHANNELS";

export const updateChannelsAC=(data)=>({type:UPDATE_CHANNELS,data:data});

let myTV={
  cannels:null,
  isFetching:false
};


export const updateChannelsThunkCreator=()=>{
return (dispatch)=>{
  tvAPI.getChannels()
    .then(response=>{
      dispatch(updateChannelsAC(response.data));
    });
  }
}

export let reducerTV=(state=myTV,action)=>{
  switch (action.type) {
    case UPDATE_CHANNELS:
    console.log("Данные");
    console.log(action.data);
//      let newdata=JSON.stringify(action.data,null,'\t');
//        newdata=newdata.replace(/(^\s+|\s+$)/g,"");
//        console.log("Данные после приведения к строке");
//        console.log(newdata);
//        debugger;
//      console.log("Данные после парсинга");
//      JSON.parse(newdata.)
//      JSON.parse(newdata)

//      let t=JSON.parse(newdata, function(k, v) {
          //console.log(k+','+v);
//       return k
      //   });
      // console.log(t);
       return {...state
         ,channels: Object.entries(action.data)
       };
    default:return state;

  }


}
