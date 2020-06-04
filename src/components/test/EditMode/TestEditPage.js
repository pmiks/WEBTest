import '../testslist.css';
import React,{useEffect} from "react";
import TestQuestionEdit from './QuestionItemEditConatainer';
import {connect} from 'react-redux';
import {compose} from 'redux';
//import TestsList from './TestsEditListContainer'
//import TestsResult from './TestResult'
import Paginator from '../../../common/paginator2';
import Player from '../../../common/MusicPlayer';
//import QuestionResult from './QuestionResultContainer';
import QuestionEditTools from './QuestionEditToolsContainer';
import TestEdit from './TestEditContainer.jsx';
//import NavPanel from './NavPanelContainer';
import TicketsEdit from './TicketTestEditContainer';
import TestResultEdit from './TestResultEditContainer';
//import TimerBlock from './TimerBlock';
//import Tickets from './TicketTestContainer';
import TestCheck from './TestCheckContainer';
import AlertWindow from '../../alertwindow/AlertWindowContainer';
import {withRouter,NavLink} from "react-router-dom";
import {withAuthRedirect} from '../../../common/myhocs';


import {getCurrentEditTestParamSEL} from '../../../redux/test-selectors';
//import {withAuthRedirect} from '../../common/myhocs';
import {//selectTestAC,
        selectTestEditTC,
        //selectTestThunkCreator,
        setCurrentEditQuestion_TC,
        addNewQuestionThunkCreator,
        editModeONAC,
//        offEditModeAC,
        getTestsListThunkCreator,
        loadQuestionThunkCreator,
        testIsDoneAC,
        nextQuestionTC,
      } from '../../../redux/reducerTestsEdit';


const TestPage=({idTest,
//  editMode,
  list,
  currentQuestion,
  listlength,
//  isDoneTest,
//  onEditMode,
//  offEditMode,
//  getTestsList,
//  onSave,
//  onCancel,
//  addQuest,
  setQuest,
//  onNext,
  selectTestEdit,
  tp,
//  currentAnswer,
//  onPrev,
//  flugTestIsOver,
//  testIsDone,
  match,
//  editModeON
})=>{

   useEffect(() => {
       selectTestEdit(match.params.testid);
//       editModeON();
   },[match.params.testid]);


  let setQ=(page,pc)=>{
     setQuest(list[page-1].id);
   }
 return <div className={"edittestpage"}>
      <div className="menu">
      <AlertWindow/>
      <TestCheck/>
      <QuestionEditTools/>
      <TicketsEdit/>
      {/*(idTest>-1)&&<TicketsEdit/>*/}
      </div>
      <div>
      {/*(idTest>-1)&&(listlength>0)&&tp.type_levelgame&&list[currentQuestion].isChecked&&!flugTestIsOver&& <QuestionResult/>*/}

      {/*(idTest>-1)&&(listlength>0)&&!flugTestIsOver&&(idTest>0)&&tp.testtime>0&&!editMode&&<TimerBlock secondstime={tp.testtime} onEndCount={testIsDone}/>*/}
      {(idTest>-1)&&(listlength>0)&&<Paginator prevnext={true}
                        totalCount={listlength} startend={true}   pageSize={1}
                        currentPage={currentQuestion+1}
                        onClick={setQ}/>}
      {(idTest>-1)&&(listlength>0)&&<TestQuestionEdit/>}
      <TestResultEdit/>
      {/*<Player url={"https://api.electricalab.ru/sounds/khsm_lifeline_1-.mp3"}/>*/}
      {/*(idTest>-1)&&(listlength>0)&&<NavPanel/>*/}
      {/*!editMode&&(idTest>0)&&(tp.tickets.length>0)&&<Tickets/>*/}
      {(idTest>-1)&&<TestEdit/>}
      {/*(idTest>-1)&&flugTestIsOver&&<TestsResult  list={list}/>*/}
      </div>
      {/*<NavLink to={""}><button>На главную</button></NavLink>*/}
  </div>;
}


let mapStateToProps=(state)=>{
      return{
//        flugShowTicketList:state.Tests.flugShowTicketList,
        tp:getCurrentEditTestParamSEL(state),
//        questiontime:getCurrentTestParamSEL(state).questiontime,
        currentQuestion:state.TestsEdit.currentQuestionEdit,
//        currentAnswer:state.Tests.currentAnswer,
//        editMode:state.TestsEdit.editMode,
        idTest:state.TestsEdit.idTestEdit,
        list:state.TestsEdit.listedit,
        listlength:state.TestsEdit.listedit.length,
//        flugTestIsOver:state.TestsEdit.testresult.isDoneTest,
      }
}


export default compose(
    connect(mapStateToProps,{
//      onSave:saveThunkCreator,
//      onEditMode:onEditModeAC,
//      editModeON:editModeONAC,
//      offEditMode:offEditModeAC,
//      addQuest:addNewQuestionThunkCreator,
//      getTestsList:getTestsListThunkCreator,
//      onCancel:loadQuestionThunkCreator,
      setQuest:setCurrentEditQuestion_TC,
//      onNext:nextQuestionTC,
      selectTestEdit:selectTestEditTC
//      testIsDone:testIsDoneAC
    }),
  withAuthRedirect,
  withRouter
  )
  (TestPage);
