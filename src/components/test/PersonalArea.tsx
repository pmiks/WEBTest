import React from 'react'
import './PersonalArea.css'
import TestEditList from './EditMode/TestsEditListContainer'
import ProfileSettings from './EditMode/ProfileSettings'
import AllTestResult from './EditMode/AllTestResultContainer'
//import {withAuthRedirect} from '../../common/myhocs';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withAuthRedirect} from '../../common/myhocs';
import {Route,NavLink,Switch} from 'react-router-dom';
import { TypeMe } from '../../redux/interface'
import { AppStateType } from '../../redux/redux-store'

const PersonalArea:React.FC<{me:TypeMe}>=({me})=>{
  return <div className="PersonalArea">
  <div className="menu">
      <NavLink className="mitem" to="/personalarea/mytestresult">Пройденные тесты</NavLink>
      {(me.GMODERATOR||me.GSUPERUSER||me.GTESTGENERATOR)&&<NavLink className="mitem" to="/personalarea/mytests">Мои тесты</NavLink>}
      <NavLink className="mitem" to="/personalarea/settings">Мои настройки</NavLink>

  </div>
  <div className="context">
  {/*<TestEditList/>*/}
    <Switch>
     {(me.GMODERATOR||me.GSUPERUSER||me.GTESTGENERATOR)&&<Route path='/personalarea/mytests' render={()=><TestEditList/>}/>}
     <Route path='/personalarea/mytestresult' render={()=><AllTestResult/>}/>
     <Route path='/personalarea/settings' render={()=><ProfileSettings/>}/>

    </Switch>
  </div>

  </div>
}

let mapStateToProps=(state:AppStateType)=>{
      return{
        me:state.me
      }
}

export default compose(
    connect(mapStateToProps,{
    }),
  withAuthRedirect,
  //withPreloader
  )
  (PersonalArea);
