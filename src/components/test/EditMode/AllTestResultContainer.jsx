import AllTestResult from './AllTestResult';
import {connect} from 'react-redux';
import {compose} from 'redux';
//import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../../common/myhocs';
import {getAllTestResultTC,deleteUserResultTC} from '../../../redux/reducerTests2';



let mapStateToProps=(state)=>{
      return{
        atr:state.Tests.alltestresult
      }
}


export default compose(
    connect(mapStateToProps,{
      getAllTestResult:getAllTestResultTC,
      deleteUserResult:deleteUserResultTC
    }),
    withAuthRedirect,
//    withRouter
  )
  (AllTestResult);
