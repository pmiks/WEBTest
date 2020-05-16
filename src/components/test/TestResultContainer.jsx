import './testslist.css';
import TestResult from '../test/TestResult';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';

import {getTestResultTC} from '../../redux/reducerTests2';



let mapStateToProps=(state)=>{
      return{
        tr:state.Tests.testresult
      }
}


export default compose(
    connect(mapStateToProps,{
      getTestResult:getTestResultTC
    }),
  //  withAuthRedirect
    withRouter
  )
  (TestResult);
