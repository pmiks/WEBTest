import React from 'react';
import QuestionItem from './QuestionItem';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {getCurrentQuestionSEL,getCurrentTestParamSEL} from '../../redux/test-selectors';
import {setUserChoiseAnswerThunkCreator,
        addNewQuestionThunkCreator,
        deleteQuestionThunkCreator,
        editQuestionThunkCreator,
        editAnswerThunkCreator,
        deleteAnswerThunkCreator,
        addNewAnswerThunkCreator,
//        saveThunkCreator,
        prevQuestionAC,
        nextQuestionTC,
        saveQuestionPhotoThunkCreator,
        saveAnswerPhotoThunkCreator,
        testIsDoneAC,
        deleteAnswerPhotoThunkCreator,
        deleteQuestionPhotoThunkCreator,
        checkChoiseAC,
        onInputAnswerTC
      } from '../../redux/reducerTests2';
import {withAuthRedirect,withPreloader} from '../../common/myhocs';

class Question extends React.Component{

onSelectState=(qid,aid)=>{
  this.props.setUserChoiseAnswer(qid,aid)
  if (this.props.type_levelgame) {
      this.props.chkChoise();
  }
}


    render(){
          debugger;
          return <div>
                              <QuestionItem
                                onEnd={this.props.allIsChecked&&this.props.onPrev}
                                checkChoise={this.onSelectState}

                                {...this.props}
                                />
              </div>
        }
}

let mapStateToProps=(state)=>{
      return{
        tp:getCurrentTestParamSEL(state),
        question:getCurrentQuestionSEL(state),
        list:state.Tests.list,
        allIsChecked:state.Tests.allIsChecked,
        editMode:state.Tests.editMode,
        type_levelgame:state.Tests.testparam.type_levelgame,
        idTest:state.Tests.idTest
      }
}


export default compose(
    connect(mapStateToProps,{
      onInputAnswer:onInputAnswerTC,
      addNewQuestion:addNewQuestionThunkCreator,
      deleteQuestion:deleteQuestionThunkCreator,
      editQuestion:editQuestionThunkCreator,
      editAnswer:editAnswerThunkCreator,
      deleteAnswer:deleteAnswerThunkCreator,
      addNewAnswer:addNewAnswerThunkCreator,
//      saveAnswer:saveThunkCreator,
      onPrev:prevQuestionAC,
      onNext:nextQuestionTC,
      saveQPhoto:saveQuestionPhotoThunkCreator,
      saveAPhoto:saveAnswerPhotoThunkCreator,
      testIsDone:testIsDoneAC,
      deleteAnswerPhoto:deleteAnswerPhotoThunkCreator,
      deleteQuestionPhoto:deleteQuestionPhotoThunkCreator,
      setUserChoiseAnswer:setUserChoiseAnswerThunkCreator,
      chkChoise:checkChoiseAC
    }),
  //  withAuthRedirect,
  withPreloader
  )
  (Question);
