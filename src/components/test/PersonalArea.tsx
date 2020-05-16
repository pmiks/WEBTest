import React from 'react'
import './PersonalArea.css'
import TestEditList from './EditMode/TestsEditListContainer'
import ProfileSettings from './EditMode/ProfileSettings'
import AllTestResult from './EditMode/AllTestResultContainer'
//import {withAuthRedirect} from '../../common/myhocs';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withAuthRedirect,withPreloader} from '../../common/myhocs';
import {Route,NavLink,Switch} from 'react-router-dom';

const PersonalArea:React.FC<{}>=()=>{
  return <div className="PersonalArea">
  <div className="menu">
      <NavLink className="mitem" to="/personalarea/mytestresult">Пройденные тесты</NavLink>
      <NavLink className="mitem" to="/personalarea/mytests">Мои тесты</NavLink>
      <NavLink className="mitem" to="/personalarea/settings">Мои настройки</NavLink>

  </div>
  <div className="context">
  {/*<TestEditList/>*/}
    <Switch>
     <Route path='/personalarea/mytests' render={()=><TestEditList/>}/>
     <Route path='/personalarea/mytestresult' render={()=><AllTestResult/>}/>
     <Route path='/personalarea/settings' render={()=><ProfileSettings/>}/>

    </Switch>
  </div>

  </div>
}

let mapStateToProps=(state:any)=>{
      return{
      }
}

export default compose(
    connect(mapStateToProps,{
    }),
  withAuthRedirect,
  //withPreloader
  )
  (PersonalArea);
