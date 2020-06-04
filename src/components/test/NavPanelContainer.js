import NavPanel from './NavPanel';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {testIsDone_AC,
        nextQuestion_AC,unloadTestAC,unloadFlugON,prevQuestionAC} from '../../redux/reducerTests2';
import {getCurrentTestParamSEL,getCurrentQuestionSEL,getTestResultSEL,getCurrentAnswerSEL} from '../../redux/test-selectors';

const mapStateToProps=(state)=>{
  return {
    tp:getCurrentTestParamSEL(state),
    allIsChecked:state.Tests.allIsChecked
//    currQuest:getCurrentQuestionSEL(state),
//    currAns:getCurrentAnswerSEL(state),
//    tR:getTestResultSEL(state)
  }
}

export default compose (
    connect(mapStateToProps,{
//      testIsDone:testIsDoneAC,
//      selectTest:selectTestThunkCreator,
      onNext:nextQuestion_AC,
      onPrev:prevQuestionAC,
      testIsDone:testIsDone_AC,
//      unloadTest:unloadTestAC,
//      unloadFlugON:unloadFlugON
    })
)
(NavPanel)
