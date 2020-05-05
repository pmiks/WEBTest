const ADD_MENU_ITEM='ADD_MENU_ITEM';
const UPDATE_MENU_ITEM='UPDATE_MENU_ITEM';

export const addMenuItemAC =(newItem)=>({type:ADD_MENU_ITEM,newItem});

let initState={
  items:[
    {id:1,name:"Пользователи",link:"/users",container:"<ContainerUser/>",enabled:true},
    {id:2,name:"Профиль",link:"/profile",container:"<ContainerProfile/>",enabled:true},
    {id:3,name:"Тесты",link:"/test",container:"<ContainerTestPage/>",enabled:true},
    {id:4,name:"Телевизор",link:"/tv",container:"<ChannelList/>",enabled:true},
    {id:5,name:"Настройки",link:"/settings",container:"<Settings/>",enabled:true},
    {id:4,name:"Слайдер",link:"/slider",container:"<SliderInfo/>",enabled:true},
  ],
};

export const reducerMenuItem=(state=initState,action)=>{
    switch (action.type) {
    case ADD_MENU_ITEM:
      let id=state.items.length+1;
      return{
        ...state,
        items:[...state.items,{id:id,name:action.newItem,link:`/page${id}`,container:null,enabled:true}],
        newMenuItem:''
      };
      default:  return state;
  }
}
