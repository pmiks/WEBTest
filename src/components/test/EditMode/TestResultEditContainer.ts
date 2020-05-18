import TestResultEdit from './TestResultEdit';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {setResultItemAC,addResultItemAC,deleteResultItemAC,saveResultTC} from '../../../redux/reducerTestsEdit';


const mapStateToProps=(state:any)=>{
  return {
    idTest:state.TestsEdit.idTestEdit,
    result:state.TestsEdit.result
  }
}

export default compose (
    connect(mapStateToProps,{
//      getResult:getResultTC,
      addResultItem:addResultItemAC,
      setResultItem:setResultItemAC,
      deleteResultItem:deleteResultItemAC,
      saveResult:saveResultTC
    })
)
(TestResultEdit)
