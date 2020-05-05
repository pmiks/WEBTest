import {combineReducers
       ,createStore,applyMiddleware} from "redux";
import thunkMiddleware               from 'redux-thunk';
import {reducer as reducerForm}      from 'redux-form';
import {reducerMenuItem}             from './reducerMenuItem';
import {reducerTests}                from './reducerTests2';
import {reducerUser}                 from './reducerUser';
import {reducerAuthVK}               from './reducerAuthVK';
import {reducerTV}                   from './reducerTV';
import {reducerInit}                 from './reducerInit';
import {reducerSlider}               from './reducerSlider';

let reducers=combineReducers(
    {
     MenuItems:reducerMenuItem,
     Tests:reducerTests,
     userList:reducerUser,
     me:reducerAuthVK,
     form:reducerForm,
     tv:reducerTV,
     init:reducerInit,
     slider:reducerSlider
    }
  );

let Store=createStore(reducers,applyMiddleware(thunkMiddleware));


window.store=Store;

export default Store;
