import TestResultEdit from './TestResultEdit';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {getResultTC} from '../../../redux/reducerTestsEdit';


const mapStateToProps=(state:any)=>{
  return {
    idTest:state.TestsEdit.idTestEdit,
    result:state.TestsEdit.result
  }
}

export default compose (
    connect(mapStateToProps,{
      getResult:getResultTC
    })
)
(TestResultEdit)
