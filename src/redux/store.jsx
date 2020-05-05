import {reducerMenuItem} from './reducerMenuItem';


let Store={
//  {question:"Здесь будет вопрос1",ans:["Ответ 1","Ответ 2","Ответ 3"],rightAns:[true,false,false]},
//  {question:"Здесь будет вопрос2",ans:["Ответ 21","Ответ 22","Ответ 23"],rightAns:[true,false,false]},
//  {question:"Здесь будет вопрос3",ans:["Ответ 31","Ответ 32","Ответ 33"],rightAns:[true,false,true]},
//  {question:"Здесь будет вопрос4",ans:["Ответ 41","Ответ 42","Ответ 43"],rightAns:[true,false,false]},
//  {question:"Здесь будет вопрос5",ans:["Ответ 51","Ответ 52","Ответ 53"],rightAns:[true,false,true]},
//  {question:"Здесь будет вопрос6",ans:["Ответ 61","Ответ 62","Ответ 63"],rightAns:[true,false,false]}
  _state:{
  MenuItems:{
    items:[
      {id:1,name:"Тест 1",link:"/page1"},
      {id:2,name:"Тест 2",link:"/page2"},
      {id:3,name:"Тест 3",link:"/page3"}
    ],
    newMenuItem:''
  },
  Tests:
    [
      {question:"Здесь будет вопрос1",ans:[["Ответ 1",true],["Ответ 2",false],["Ответ 3",false]]},
      {question:"Здесь будет вопрос2",ans:[["Ответ 21",false],["Ответ 22",true],["Ответ 23",false]]},
      {question:"Здесь будет вопрос3",ans:[["Ответ 31",true],["Ответ 32",false],["Ответ 33",false]]},
      {question:"Здесь будет вопрос4",ans:[["Ответ 41",true],["Ответ 42",true],["Ответ 43",true]]},
      {question:"Здесь будет вопрос5",ans:[["Ответ 51",true],["Ответ 52",false],["Ответ 53",false]]},
      {question:"Здесь будет вопрос6",ans:[["Ответ 61",true],["Ответ 62",false],["Ответ 63",false]]}
    ]
  },
  getState(){
    return this._state;
  },

  _callSubscriber(){
    console.log('Callback function undefined');
  },

  dispatch(action){
     this.MenuItems=reducerMenuItem(this.MenuItems,action);
     this._callSubscriber();
    },

  subscribe(observer){
    this._callSubscriber=observer;
  }

}



export default Store;
