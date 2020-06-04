import {combineReducers
       ,createStore,applyMiddleware} from "redux";
import thunkMiddleware               from 'redux-thunk';
import {reducerTests}                from './reducerTests2';
import {reducerAuthVK}               from './reducerAuthVK';
import {reducerInit}                 from './reducerInit';
import {reducerTestsEdit}                from './reducerTestsEdit';



let rootReducer=combineReducers(
    {
     Tests:reducerTests,
     TestsEdit:reducerTestsEdit,
     me:reducerAuthVK,
     init:reducerInit,
    }
  );


type TypeReducer = typeof rootReducer
export type AppStateType=ReturnType<TypeReducer>

let Store=createStore(rootReducer,applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store=Store;

export default Store;
