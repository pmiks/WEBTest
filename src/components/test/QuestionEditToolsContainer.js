import QuestionEditTools from "./QuestionEditTools";
import React from 'react';

import {connect} from 'react-redux';
import {compose} from 'redux';

import {getCurrentTestSEL,getCurrentTestParamSEL} from '../../redux/test-selectors';

import {
//  saveThunkCreator,
  editModeONAC,
  offEditModeAC,
  addNewQuestionThunkCreator,
  loadQuestionThunkCreator,
  deleteQuestionThunkCreator,
  _nextQuestionAC,
  prevQuestionAC,
  selectTestThunkCreator,
  addNewAnswerAC,
  unloadFlugON,
  saveAllTC,
  unloadTestAC,
  addTicketAC,
  checkTestAC,
  publicateTC

//  saveTicketsTC,
//  saveTestParamTC
} from '../../redux/reducerTests2';
import {withAuthRedirect,withAuthShow,withEditMode,withPreloader} from '../../common/myhocs';

class QuestionQuestionEditToolsContainer extends React.Component{


SaveAll=()=>{
    this.props.saveAllQuestions(this.props.list,this.props.currentTest);
}

onCancel=()=>{
    this.props.onCancel(this.props.list[this.props.currentQuestion]);
}

onPublicate=()=>{
    this.props.publicate();
//    this.props.saveAllQuestions(this.props.list,this.props.currentTest);
}

    render(){
          return <div>
                    <QuestionEditTools
                             onSave={this.SaveAll}
                             onCancel={this.Cancel}
                             onPublicate={this.onPublicate}
                             {...this.props}
                             />
              </div>
        }
}


let mapStateToProps=(state)=>{
      return{
        TicketList:getCurrentTestSEL(state),
        currentTest:getCurrentTestParamSEL(state),
        currentQuestion:state.Tests.currentQuestion,
        editMode:state.Tests.editMode,
        idTest:state.Tests.idTest,
        list:state.Tests.list,
        isDoneTest:state.Tests.testresult.isDoneTest,
        timeQuestResult:state.Tests.testparam.timeQuestResult,
        dataIsChanged:state.Tests.dataIsChanged
      }
}

export default compose(
    connect(mapStateToProps,{
//      saveTestParam:saveTestParamTC,
//      Save:saveThunkCreator,
      publicate:publicateTC,
      addTicket:addTicketAC,
      editModeON:editModeONAC,
      offEditMode:offEditModeAC,
      addQuest:addNewQuestionThunkCreator,
      onNext:_nextQuestionAC,
      onPrev:prevQuestionAC,
      addNewAnswer:addNewAnswerAC,
      deleteQuestion:deleteQuestionThunkCreator,
//      getTestsList:getTestsListThunkCreator,
      Cancel:loadQuestionThunkCreator,
      selectTest:selectTestThunkCreator,
      unloadFlugON:unloadFlugON,
      saveAllQuestions:saveAllTC,
      unloadTest:unloadTestAC,
      checkTest:checkTestAC
//      saveTickets:saveTicketsTC
//      setQuest:setCurrentQuestionAC,
//      onNext:nextQuestionAC,
//      selectTest:selectTestThunkCreator
    }),
  //  withAuthRedirect,
  withAuthShow,
  withEditMode
  )
  (QuestionQuestionEditToolsContainer);
