import QuestionEditTools from "./QuestionEditTools";
import React from 'react';

import {connect} from 'react-redux';
import {compose} from 'redux';

import {getCurrentEditTestSEL,getCurrentEditTestParamSEL} from '../../../redux/test-selectors';

import {
// //  saveThunkCreator,
//   editModeONAC,
//   offEditModeAC,
   addNewQuestionThunkCreator,
// //  loadQuestionThunkCreator,
   deleteQuestionThunkCreator,
   nextEditQuestionAC,
   prevEditQuestionAC,
//   selectTestEditTC,
   addNewAnswerAC,
//   unloadFlugON,
   saveAllTC,
//   unloadTestAC,
   addTicketAC,
   checkTestAC,
   publicateTC,
   selectTestEditAC
//  saveTicketsTC,
//  saveTestParamTC
} from '../../../redux/reducerTestsEdit';
import {withAuthRedirect,withAuthShow,withEditMode,withPreloader} from '../../../common/myhocs';

class QuestionEditToolsContainer extends React.Component{


SaveAll=()=>{
    this.props.saveAllQuestions(this.props.list,this.props.currentTest);
}

onCancel=()=>{
    this.props.onCancel(this.props.list[this.props.currentQuestion]);
}

// onPublicate=()=>{
//     this.props.publicate();
// //    this.props.saveAllQuestions(this.props.list,this.props.currentTest);
// }

    render(){
          return <div>
                    <QuestionEditTools
                             onSave={this.SaveAll}
                             onCancel={this.Cancel}
                             // onPublicate={this.onPublicate}
                             {...this.props}
                             />
              </div>
        }
}


let mapStateToProps=(state)=>{
      return{
         ticketlist:getCurrentEditTestSEL(state),
         currentTest:getCurrentEditTestParamSEL(state),
         currentQuestion:state.TestsEdit.currentQuestionEdit,
// //        editMode:state.TestsEdit.editMode,
         idTest:state.TestsEdit.idTestEdit,
         list:state.TestsEdit.listedit,
// //        isDoneTest:state.Tests.testresult.isDoneTest,
// //        timeQuestResult:state.Tests.testparam.timeQuestResult,
         dataIsChanged:state.TestsEdit.dataIsChanged
      }
}

export default compose(
    connect(mapStateToProps,{
// //      saveTestParam:saveTestParamTC,
// //      Save:saveThunkCreator,
       onPublicate:publicateTC,
       addTicket:addTicketAC,
// //      editModeON:editModeONAC,
// //      offEditMode:offEditModeAC,
       addQuest:addNewQuestionThunkCreator,
       onNext:nextEditQuestionAC,
       onPrev:prevEditQuestionAC,
       addNewAnswer:addNewAnswerAC,
       deleteQuestion:deleteQuestionThunkCreator,
// //      getTestsList:getTestsListThunkCreator,
// //      Cancel:loadQuestionThunkCreator,
// //      selectTest:selectTestEditTC,
// //      unloadFlugON:unloadFlugON,
       saveAllQuestions:saveAllTC,
// //      unloadTest:unloadTestAC,
       checkTest:checkTestAC,
       selectTestEdit:selectTestEditAC
//      saveTickets:saveTicketsTC
// //      setQuest:setCurrentQuestionAC,
// //      onNext:nextQuestionAC,
// //      selectTest:selectTestThunkCreator
    }),
  //  withAuthRedirect,
  withAuthShow,
//  withEditMode
  )
  (QuestionEditToolsContainer);
