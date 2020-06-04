import './App.css';
import React              from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import TestPage           from './components/test/EditMode/TestEditPage';
import {connect}          from 'react-redux'
import {initializeAppThunkCreator} from './redux/reducerInit';
import {withRouter}       from 'react-router-dom';
import {compose} from 'redux';
import Preloader from './common/preloader';
import Header from './components/header/Header'
import TestList from './components/test/mainpage_container';
import Test           from './components/test/Test';
import TestResult   from './components/test/TestResultContainer';
import PersonalArea from './components/test/PersonalArea';
//const GLOBAL_PATH_SRC="https://api.electricalab.ru/";

//window.global = {GLOBAL_PATH_SRC};

class App extends React.Component {
  componentDidMount(){
     this.props.initializeAppThunkCreator()
  };


render(){
    if (!this.props.initialized) return <Preloader/>
    return (
    <div className="App" style={{"backgroundColor": "transparent"}}>
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
       <div className="Page" style={{"backgroundColor": "transparent"}}>
       <Switch>
         <Route path='/personalarea' render={()=><PersonalArea/>}/>
         <Route path='/test/:testid?' render={()=><Test/>}/>
         <Route path='/testedit/:testid?' render={()=><TestPage/>}/>
         <Route path='/testresult/:testsession?' render={()=><TestResult/>}/>
         <Route path='/' render={()=><TestList/>}/>
         <Redirect to="/public"/>
       </Switch>
       <div className="Footer"></div>
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
