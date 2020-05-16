import QuestionResult from './QuestionResult';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {testIsDoneAC,selectTestThunkCreator,nextQuestionTC,unloadTestAC,unloadFlugON} from '../../redux/reducerTests2';
import {getCurrentTestParamSEL,getCurrentQuestionSEL,getTestResultSEL,getCurrentAnswerSEL} from '../../redux/test-selectors';

const mapStateToProps=(state)=>{
  return {
    tp:getCurrentTestParamSEL(state),
    currQuest:getCurrentQuestionSEL(state),
    currAns:getCurrentAnswerSEL(state),
    tR:getTestResultSEL(state)
  }
}

export default compose (
    connect(mapStateToProps,{
      testIsDone:testIsDoneAC,
      selectTest:selectTestThunkCreator,
      onNext:nextQuestionTC,
//      unloadTest:unloadTestAC,
//      unloadFlugON:unloadFlugON
    })
)
(QuestionResult)

//onPrev={onPrev}
//win={list[currentQuestion].win}
//onRepeat={()=>{selectTest(list[currentQuestion].idtest)}}
//timeQuestResult={tp.timeQuestResult}
//qrespond={list[currentQuestion].selectcounter}
//arespond={list[currentQuestion].ans[currentAnswer].selectcounter}
