import {sInit} from './init/initSlider.js'

const NEXT_SLIDE='NEXT_SLIDE';
const PREV_SLIDE='PREV_SLIDE';
const ADD_SLIDE='ADD_SLIDE';
const REMOVE_SLIDE='REMOVE_SLIDE';

export const nextSlideAC=()=>({type:NEXT_SLIDE});
export const prevSlideAC=()=>({type:PREV_SLIDE});
export const addSlideAC=(item,url="")=>({type:ADD_SLIDE,item:item,url:url});
export const removeSlideAC=(id)=>({type:REMOVE_SLIDE,id:id});



export let reducerSlider=(state=sInit,action)=>{
  let newCurrent=undefined;
  switch (action.type) {
    case NEXT_SLIDE:
         newCurrent=state.currentItem+1;
         return{
          ...state,
          prevActive:newCurrent>0,
          nextActive:newCurrent<state.item.length-1,
          currentItem:state.currentItem<state.item.length-1?newCurrent:state.currentItem
        };

    case PREV_SLIDE:
             newCurrent=state.currentItem-1;
             return{
              ...state,
              currentItem:state.currentItem>0?newCurrent:state.currentItem,
              prevActive:newCurrent>0,
              nextActive:newCurrent<state.item.length-1,
            };
    case ADD_SLIDE:
      debugger;
       return{
          ...state,
          item:[...state.item,{img:action.item,url:action.url}],
          currentItem:state.item.length,
          nextActive:false,
          prevActive:state.currentItem>0
        };

    case REMOVE_SLIDE:
      let left=action.id===0;
      let right=action.id===state.item.length-1;
      return{
        ...state,
        item:state.item.filter((u,id)=>id!=action.id),
        currentItem:right?state.currentItem-1:state.currentItem,
        nextActive:!right,
//        prevActive:newCurrent>0,
//        nextActive:newCurrent<state.item.length-1,
      };

    default:return state;
  }

}
