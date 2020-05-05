import './App.css';


import React              from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import ContainerHeader    from './components/header/ContainerHeader';
import LeftPanel          from './components/leftpanel';
import TestPage           from './components/test/TestPage';
import ContainerUser      from './components/users/ContainerUser';
import ContainerProfile   from './components/profile/ContainerProfile';
import Login              from './components/login/containerLogin';
import ChannelList        from './components/tv/ContainerChannelList'
import Settings           from './components/settingspage/containersettingspage'
import {connect}          from 'react-redux'
import {initializeAppThunkCreator} from './redux/reducerInit';
import {withRouter}       from 'react-router-dom';
import {compose} from 'redux';
import Preloader from './common/preloader';
import SliderInfo from'./common/sliderinfo';
import Header from './components/header/Header'
import TestList from './components/test/mainpage_container';
import Test           from './components/test/Test';

const GLOBAL_PATH_SRC="https://api.electricalab.ru/";

window.global = {GLOBAL_PATH_SRC};

class App extends React.Component {
  componentDidMount(){
     this.props.initializeAppThunkCreator()
  };


render(){
    if (!this.props.initialized) return <Preloader/>
    return (
    <div className="App">
    <div className="Header"><Header/></div>
    <div className="LeftPanel"></div>
      {/*   <ContainerHeader/>
       <LeftPanel/>
       <Route path='/test' render={()=><TestPage/>}/>
       <Route path='/users' render={()=><ContainerUser/>}/>
       <Route path='/profile/:userId?' render={()=><ContainerProfile/>}/>
       <Route path='/login' render={()=><Login/>}/>
       <Route path='/tv' render={()=><ChannelList/>}/>
       <Route path='/settings' render={()=><Settings/>}/>
       <Route path='/slider' render={()=><SliderInfo/>} />*/}
       <div className="Page">
       <Switch>
         <Route path='/edittest' render={()=><TestPage/>}/>
         <Route path='/test/:testid?' render={()=><Test/>}/>
         <Route path='/' render={()=><TestList/>}/>
         <Redirect to="/public"/>
       </Switch>
       </div>
    </div>
     );
   }
}

const mapStateToProps=(state)=>{
  return{initialized:state.init.initialized}
};



export default compose( withRouter,connect(mapStateToProps,{initializeAppThunkCreator}))
(App)
