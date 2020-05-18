import './testslist.css';
import TestResult from '../test/TestResult';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';

import {getTestResultTC,getResultTC} from '../../redux/reducerTests2';



let mapStateToProps=(state)=>{
      return{
        result:state.Tests.result,
        tr:state.Tests.testresult
      }
}


export default compose(
    connect(mapStateToProps,{
      getTestResult:getTestResultTC,
      getResult:getResultTC
    }),
  //  withAuthRedirect
    withRouter
  )
  (TestResult);
