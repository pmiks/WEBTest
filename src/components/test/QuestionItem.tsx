import React, { FC } from 'react';
//import './QuestionItem.css';
//import LoadImage from './LoadImage';

import {GLOBAL_PATH_API} from '../../Global'
import { IQuestion, ITest, IAnswer } from '../../redux/interface';

type TQuestionItem={
  question:IQuestion|null
  tp:ITest|null
  onInputAnswer:(data:string|null,send?:boolean)=>void
  checkChoise:(idQ:number,idA:number)=>void
}
const QuestionItem:FC<TQuestionItem>=({question,onInputAnswer,checkChoise,tp})=>{
  if (!question||!tp) return <></>
  return (<div className={"questionDefault question_"+tp.displaystyle}>
              <QField quest={question} NumQuest={tp.NumQuest}/>
              <>
              {!question.istextanswer&&<div className="answerlist">{question.ans.map((answers,i)=>{
                  {console.log("answer"+i) }
                   return <AField key={i}
                                  el_id={"answer"+i}
                                  answer={answers}
                                  onSelect={()=>{checkChoise(question.id,answers.id)}}
                                  win={Boolean(question.win)}
                                  type_levelgame={tp.type_levelgame}
                                  isChecked={Boolean(question.isChecked)}
                                  NumAns={tp.NumAns}
                                  />})}</div>
                  }
              {question.istextanswer&& <AFieldInput quest={question} onInputAnswer={onInputAnswer}/>}
              </>
  </div>);

}
/*

editMode - режим отрисовки (просмотр/редактирование)
idQuest - id вопроса
qestion - контейнер вопроса
onEdit - calback при изменении вопроса
onDel - calback при удалении вопроса
*/

type TQField={
  quest:IQuestion
  NumQuest:string
}

const QField:FC<TQField>=({quest,NumQuest})=>{
  let kodnum=NumQuest.length>0?NumQuest.charCodeAt(0):0;
  let num="";
  if (kodnum==65||kodnum==97) num=String.fromCharCode(kodnum+(quest.num?quest.num:0)-1)+NumQuest.substr(1,2);
  if (kodnum==49) num=String(quest.num)+NumQuest.substr(1,2);
  return <>
      {quest.img&&<img className="questionitempic" src={GLOBAL_PATH_API+'/'+quest.img}/>}
      {/*quest.img&&<img className="questionitempic" src={GLOBAL_PATH_API+'/'+quest.img}/>*/}
      {/*<LoadImage zoomer="true" height="200px" img={quest.img}/>*/}
      <div className="questionitemtext">{quest.question&&NumQuest&&quest.num+'. '}{quest.question}</div>
    </>
}

type TAField={
  el_id:string,
  answer:IAnswer
  win:boolean
  isChecked:boolean
  type_levelgame:boolean
  onSelect:()=>void
  NumAns:string
}


const AField:FC<TAField>=({el_id,answer,win,isChecked,type_levelgame,onSelect,NumAns})=>{
  let kodnum=NumAns.length>0?NumAns.charCodeAt(0):0;
  let num="";
  if (kodnum==65||kodnum==97) num=String.fromCharCode(kodnum+answer.num-1)+NumAns.substr(1,2);
  if (kodnum==49) num=String(answer.num)+NumAns.substr(1,2);
  return    <div  onClick={onSelect} id={el_id}
                 className={"answeritem "+(answer.uch ? (type_levelgame&&win?"rightitem":(type_levelgame&&!win?"wrongitem":"itemselected")):(type_levelgame&&isChecked&&answer.truth?"rightitem":"item"))+(answer.nonactiv?" notactive ":"")}>
                 <div className="nn">  {num} </div>
                 {answer.img&&<img className="pic" src={GLOBAL_PATH_API+'/'+answer.img}/>}
                 <div className="answertext"> {answer.anstext}</div>
            </div>

}

type TAFieldInput={
  onInputAnswer:(data:string|null,send?:boolean)=>void
  className?:string
  quest:IQuestion
}


const AFieldInput:FC<TAFieldInput>=({onInputAnswer,quest})=>{
  let onEnter=(e:any)=>{
      if (e.key=='Enter'&&e.target.value.length>0) {e.key=0;e.target.value="";onInputAnswer(e.target.value,true)}
  }
  return <div className={"answerinputitem"}>
                    <input className="answerinput" type="text" value={quest.inputAnswer} autoFocus={true} onChange={(e)=>{onInputAnswer(e.target.value)}} onKeyPressCapture={onEnter} />
                    <div className="answerbutton" onClick={(e)=>{onInputAnswer(null,true)}}>Ответить</div>
      </div>
  }


export default QuestionItem;
