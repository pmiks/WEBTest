import React from 'react';
import QuestionItemEdit from './QuestionItemEdit';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {getCurrentEditQuestionSEL,getCurrentEditTestParamSEL} from '../../../redux/test-selectors';
import {//setUserChoiseAnswerThunkCreator,
        addNewQuestionThunkCreator,
        deleteQuestionThunkCreator,
        editQuestionThunkCreator,
        editAnswerThunkCreator,
        deleteAnswerThunkCreator,
        addNewAnswerThunkCreator,
//        saveThunkCreator,
        prevEditQuestionAC,
        nextEditQuestionAC,
        saveQuestionPhotoThunkCreator,
        saveAnswerPhotoThunkCreator,
//        testIsDoneAC,
        deleteAnswerPhotoThunkCreator,
        deleteQuestionPhotoThunkCreator,
//        checkChoiseAC,
//        onInputAnswerTC
} from '../../../redux/reducerTestsEdit';
import {withAuthRedirect,withPreloader} from '../../../common/myhocs';

class QuestionEdit extends React.Component{

onSelectState=(qid,aid)=>{
  this.props.setUserChoiseAnswer(qid,aid)
  if (this.props.type_levelgame) {
      this.props.chkChoise();
  }
}


    render(){
          debugger;
          return <div>
                              <QuestionItemEdit
//                                onEnd={this.props.allIsChecked&&this.props.onPrev}
//                                checkChoise={this.onSelectState}

                                {...this.props}
                                />
              </div>
        }
}

let mapStateToProps=(state)=>{
      return{
        tp:getCurrentEditTestParamSEL(state),
        question:getCurrentEditQuestionSEL(state),
        list:state.Tests.list,
//        allIsChecked:state.Tests.allIsChecked,
//        editMode:state.Tests.editMode,
//        type_levelgame:state.TestsEdit.testparam.type_levelgame,
        idTest:state.TestsEdit.idTestEdit
      }
}


export default compose(
    connect(mapStateToProps,{
//      onInputAnswer:onInputAnswerTC,
      addNewQuestion:addNewQuestionThunkCreator,
      deleteQuestion:deleteQuestionThunkCreator,
      editQuestion:editQuestionThunkCreator,
      editAnswer:editAnswerThunkCreator,
      deleteAnswer:deleteAnswerThunkCreator,
      addNewAnswer:addNewAnswerThunkCreator,
//      saveAnswer:saveThunkCreator,
      onPrev:prevEditQuestionAC,
      onNext:nextEditQuestionAC,
      saveQPhoto:saveQuestionPhotoThunkCreator,
      saveAPhoto:saveAnswerPhotoThunkCreator,
//      testIsDone:testIsDoneAC,
      deleteAnswerPhoto:deleteAnswerPhotoThunkCreator,
      deleteQuestionPhoto:deleteQuestionPhotoThunkCreator,
//      setUserChoiseAnswer:setUserChoiseAnswerThunkCreator,
//      chkChoise:checkChoiseAC
    }),
  //  withAuthRedirect,
  withPreloader
  )
  (QuestionEdit);
