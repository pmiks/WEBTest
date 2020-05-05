import './testslist.css';
import React,{useState} from "react";
import TestQuestion from '../test/QuestionItemConatainer';
import {connect} from 'react-redux';
import {compose} from 'redux';
import TestsList from './TestsListContainer'
import TestsResult from './TestResult'
import Paginator from '../../common/paginator';
import QuestionResult from './QuestionResultContainer';
import QuestionEditTools from './QuestionEditToolsContainer';
import TestEdit from './TestEditContainer.jsx';
import NavPanel from './NavPanelContainer';
import TicketsEdit from './TicketTestEditContainer';
import TimerBlock from './TimerBlock';
import Tickets from './TicketTestContainer';
import TestCheck from './TestCheckContainer';
import AlertWindow from './AlertWindowContainer';
import {NavLink} from "react-router-dom";
import {withAuthRedirect} from '../../common/myhocs';


import {getCurrentTestParamSEL} from '../../redux/test-selectors';
//import {withAuthRedirect} from '../../common/myhocs';
import {selectTestThunkCreator,
        setCurrentQuestionAC,
        addNewQuestionThunkCreator,
        onEditModeAC,
        offEditModeAC,
        getTestsListThunkCreator,
        loadQuestionThunkCreator,
        testIsDoneAC,
        nextQuestionTC,
      } from '../../redux/reducerTests2';


const TestPage=({idTest,editMode,list,currentQuestion,listlength,isDoneTest,
                 onEditMode,offEditMode,getTestsList,onSave,onCancel,addQuest,
                 setQuest,onNext,selectTest,tp,currentAnswer,onPrev,
                 flugTestIsOver,testIsDone})=>{


  let setQ=(page,pc)=>{
     if (!tp.type_levelgame||editMode) setQuest(list[page-1].id);
   }
 return <div className={editMode?"edittestpage":"testpage"}>
      <div className="menu">
      <AlertWindow/>
      <TestCheck/>
      {(idTest>-1)&&<TicketsEdit/>}
      <QuestionEditTools/>
      </div>
      <div>
      <TestsList/>
      {(idTest>-1)&&(listlength>0)&&tp.type_levelgame&&list[currentQuestion].isChecked&&!flugTestIsOver&& <QuestionResult/>}

      {(idTest>-1)&&(listlength>0)&&!flugTestIsOver&&(idTest>0)&&tp.testtime>0&&!editMode&&<TimerBlock secondstime={tp.testtime} onEndCount={testIsDone}/>}
      {(idTest>-1)&&(listlength>0)&&!flugTestIsOver&&(tp.tickets.length===0||editMode)&&<Paginator prevnext={editMode?true:false}
                        totalCount={listlength} startend={true}   pageSize={1}
                        currentPage={currentQuestion+1}
                        onClick={setQ}/>}
      {(idTest>-1)&&(listlength>0)&&!flugTestIsOver&&(tp.tickets.length===0||editMode)&&<TestQuestion/>}
      {/*!flugTestIsOver&&<TestQuestion/>*/}


      {(idTest>-1)&&(listlength>0)&&<NavPanel/>}
      {!editMode&&(idTest>0)&&(tp.tickets.length>0)&&<Tickets/>}
      {(idTest>-1)&&<TestEdit/>}
      {(idTest>-1)&&flugTestIsOver&&<TestsResult  list={list}/>}
      </div>
      <NavLink to={""}><button>На главную</button></NavLink>
  </div>;
}


let mapStateToProps=(state)=>{
      return{
//        flugShowTicketList:state.Tests.flugShowTicketList,
        tp:getCurrentTestParamSEL(state),
//        questiontime:getCurrentTestParamSEL(state).questiontime,
        currentQuestion:state.Tests.currentQuestion,
        currentAnswer:state.Tests.currentAnswer,
        editMode:state.Tests.editMode,
        idTest:state.Tests.idTest,
        list:state.Tests.list,
        listlength:state.Tests.list.length,
        flugTestIsOver:state.Tests.testresult.isDoneTest,
      }
}


export default compose(
    connect(mapStateToProps,{
//      onSave:saveThunkCreator,
      onEditMode:onEditModeAC,
      offEditMode:offEditModeAC,
      addQuest:addNewQuestionThunkCreator,
      getTestsList:getTestsListThunkCreator,
      onCancel:loadQuestionThunkCreator,
      setQuest:setCurrentQuestionAC,
      onNext:nextQuestionTC,
      selectTest:selectTestThunkCreator,
      testIsDone:testIsDoneAC
    }),
  withAuthRedirect
  )
  (TestPage);
