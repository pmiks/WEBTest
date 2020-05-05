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

import Tickets from './TicketTestContainer';

import {getCurrentTestParamSEL} from '../../redux/test-selectors';
//import {withAuthRedirect} from '../../common/myhocs';
import {selectTestThunkCreator,
        setCurrentQuestionAC,
        addNewQuestionThunkCreator,
        onEditModeAC,
        offEditModeAC,
        saveThunkCreator,
        getTestsListThunkCreator,
        loadQuestionThunkCreator,
        testIsDoneAC,
        nextQuestionTC,
        } from '../../redux/reducerTests';


const TestPage=({idTest,editMode,list,currentQuestion,listlength,isDoneTest,
                 onEditMode,offEditMode,getTestsList,onSave,onCancel,addQuest,
                 setQuest,onNext,selectTest,tp,currentAnswer,onPrev,
                 testIsDone,allIsChecked})=>{

  let setQ=(page,pc)=>{
     if (!tp.type_levelgame||editMode) setQuest(list[page-1].id);
   }
 return <div className="page">
      {(listlength>0)&&!isDoneTest&&<div>
             {tp.type_levelgame&&list[currentQuestion].isChecked&&!isDoneTest&& <QuestionResult/>}

             <Paginator prevnext={editMode?true:false}
                        totalCount={listlength} startend={true}   pageSize={1}
                        currentPage={currentQuestion+1}
                        onClick={setQ}/>
             <TestQuestion/>
             <TicketsEdit/>
             <NavPanel/>
          </div>
       }
      {!listlength&&idTest>0&& <div><h1>Вопросы в тест еще не добавленны</h1></div>}
      <TestsList/>
      <Tickets/>
      <QuestionEditTools/>
      <TestEdit/>
      {isDoneTest&&<TestsResult  list={list}/>}
  </div>;
}


let mapStateToProps=(state)=>{
      return{
        tp:getCurrentTestParamSEL(state),
        currentQuestion:state.Tests.currentQuestion,
        currentAnswer:state.Tests.currentAnswer,
        editMode:state.Tests.editMode,
        idTest:state.Tests.idTest,
        list:state.Tests.list,
        listlength:state.Tests.list.length,
        isDoneTest:state.Tests.testresult.isDoneTest,
        allIsChecked:state.Tests.allIsChecked
      }
}


export default compose(
    connect(mapStateToProps,{
      onSave:saveThunkCreator,
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
  )
  (TestPage);
