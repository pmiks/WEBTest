import './testslist.css';
import React,{useState,useEffect} from "react";
import TestQuestion from '../test/QuestionItemConatainer';
import {connect} from 'react-redux';
import {compose} from 'redux';
//import TestsList from './TestsListContainer'
import TestsResult from './TestResult'
import Paginator from '../../common/paginator';
import QuestionResult from './QuestionResultContainer';
//import QuestionEditTools from './QuestionEditToolsContainer';
import TestEdit from './TestEditContainer.jsx';
import NavPanel from './NavPanelContainer';
//import TicketsEdit from './TicketTestEditContainer';
import TimerBlock from './TimerBlock';
import Tickets from './TicketTestContainer';
//import TestCheck from './TestCheckContainer';
//import AlertWindow from './AlertWindowContainer';
import {withRouter,Redirect,NavLink} from 'react-router-dom';


import {getCurrentTestParamSEL} from '../../redux/test-selectors';
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


const TestPage=({match,idTest,editMode,list,currentQuestion,listlength,isDoneTest,
                 onEditMode,offEditMode,getTestsList,onSave,onCancel,addQuest,
                 setQuest,onNext,selectTest,tp,currentAnswer,onPrev,
                 flugTestIsOver,testIsDone})=>{

  useEffect(() => {
      selectTest(match.params.testid);
  },[match.params.testid]);

  let setQ=(page,pc)=>{
     if (!tp.type_levelgame||editMode) setQuest(list[page-1].id);
   }
  let bi="";
 if (tp) bi=window.global.GLOBAL_PATH_SRC+tp.coverimg;
 return <div className={"testpage"} style={{"background-color": "transparent"}}>
      <div className={"BackLayer"} style={{"background": `url("${bi}") 100% 100%`}}></div>
      <div >
      {(listlength>0)&&!flugTestIsOver&&(tp.tickets.length===0||editMode)&&<div className="testname">
           <div className="name">{tp.testname}</div>
           <div className="time"><TimerBlock secondstime={tp.testtime} onEndCount={testIsDone}/></div>
           </div>
      }
      {/*(listlength>0)&&(tp.tickets.length===0)&&!flugTestIsOver&&(idTest>0)&&tp.testtime>0&&!editMode&&<TimerBlock secondstime={tp.testtime} onEndCount={testIsDone}/>*/}
      {(listlength>0)&&!flugTestIsOver&&(tp.tickets.length===0||editMode)&&<Paginator prevnext={editMode?true:false}
                        totalCount={listlength} startend={true}   pageSize={1}
                        currentPage={currentQuestion+1}
                        onClick={setQ}/>}
      {(listlength>0)&&!flugTestIsOver&&(tp.tickets.length===0||editMode)&&<TestQuestion/>}
      {/*!flugTestIsOver&&<TestQuestion/>*/}
      {(listlength>0)&&<NavPanel/>}
      {!editMode&&(idTest>0)&&(tp.tickets.length>0)&&<Tickets/>}
      {flugTestIsOver&&<TestsResult  list={list}/>}
            {(listlength>0)&&tp.type_levelgame&&list[currentQuestion].isChecked&&!flugTestIsOver&& <QuestionResult/>}
      <NavLink to={""}><div className="endtest">{!flugTestIsOver?"Прервать тест":"На главную"}</div></NavLink>
      </div>
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
  //  withAuthRedirect
    withRouter
  )
  (TestPage);
