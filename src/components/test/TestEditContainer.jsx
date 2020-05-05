import TestsEdit from './TestEdit';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {setTestParamAC,saveTestCoverImgTC,deleteTestCoverImgTC} from '../../redux/reducerTests2';
import {getCurrentTestParamSEL} from '../../redux/test-selectors';
import {withEditMode} from '../../common/myhocs';




const mapStateToProps=(state)=>{
  return {
    tp:getCurrentTestParamSEL(state),
//    editMode:state.Tests.idTest,
    editMode:state.Tests.editMode,
//    isAuth:state.me.isAuth
  }
}

export default compose (
    connect(mapStateToProps,{
      setTP:setTestParamAC,
      saveTestCoverImg:saveTestCoverImgTC,
      deleteTestCoverImg:deleteTestCoverImgTC
//      selectTest:selectTestThunkCreator,
//      onEditMode:onEditModeAC
    })
    ,withEditMode
)
(TestsEdit)
