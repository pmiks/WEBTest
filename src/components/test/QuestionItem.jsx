import React from 'react';
import './testslist.css';
import LoadImage from './LoadImage';

import {GLOBAL_PATH_API} from '../../Global'

const QuestionItem=({editMode,question,
     saveAnswer,editAnswer,deleteAnswer,addNewAnswer,editQuestion,deleteQuestion,setUserChoiseAnswer,
      onNext,onPrev,onEnd,saveQPhoto,saveAPhoto,testIsDone,
      deleteAnswerPhoto,deleteQuestionPhoto,onInputAnswer,
      checkChoise,tp})=>{
  let saveQP=(e,id)=>{ if(e.target.files.length) saveQPhoto(id,e.target.files[0]);  }
  let saveAP=(e,id)=>{ if(e.target.files.length) saveAPhoto(id,e.target.files[0]); }
  debugger;
  return (<div className="question">

              {!editMode&&  <QField quest={question} showNumQuest={tp.showNumQuest}/>}
              <div>
              {!editMode&&!question.istextanswer&&<div className="answerlist">{question.ans.map((answers)=>{
                   return <AField answer={answers}
                                  onSelect={()=>{checkChoise(question.id,answers.id)}}
                                  win={question.win}
                                  type_levelgame={tp.type_levelgame}
                                  isChecked={question.isChecked}
                                  showNumAns={tp.showNumAns}
                                  />})}</div>
                  }
              {!editMode&&question.istextanswer&& <AFieldInput quest={question} onInputAnswer={onInputAnswer}/>}
              </div>
  </div>);

}
/*

editMode - режим отрисовки (просмотр/редактирование)
idQuest - id вопроса
qestion - контейнер вопроса
onEdit - calback при изменении вопроса
onDel - calback при удалении вопроса
*/
const QField=({quest,showNumQuest,className})=>{
  return <div className={className?className:"questionitem"}>
      {quest.img&&<div className="questionitempic"><img src={GLOBAL_PATH_API+'/'+quest.img}/></div>}
      {/*<LoadImage zoomer="true" height="200px" img={quest.img}/>*/}
      {quest.question&&<div className="questionitemtext">{showNumQuest&&quest.num+'. '}{quest.question}</div>}
    </div>
}

const AField=({answer,win,isChecked,type_levelgame,onSelect,showNumAns,className})=>{
  return    <div id={answer.id}  onClick={onSelect}
                 className={"answeritem "+(answer.uch ? (type_levelgame&&win?"rightitem":(type_levelgame&&!win?"wrongitem":"itemselected")):(type_levelgame&&isChecked&&answer.truth?"rightitem":"item"))}>
                 <div className="nn">  {showNumAns&& (answer.num+". ")} </div>
                 <div className="pic">{answer.img&&<img src={GLOBAL_PATH_API+'/'+answer.img}/>}</div>
                 <div className="answer"> {answer.anstext}</div>
            </div>

}

const AFieldInput=({ansUserText,onInputAnswer,className,quest})=>{
  return <div className={className?className:"answerinputitem"}>
   <div className="answer">
                    <input type="text" value={quest.inputAnswer} onChange={(e)=>{onInputAnswer(e.target.value)}} type="input" />
                    <button onClick={()=>{onInputAnswer(null,true)}}>Ответить</button>
                 </div>
    </div>
  }


export default QuestionItem;
