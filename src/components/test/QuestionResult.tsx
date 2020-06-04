import React, { FC } from 'react';
//import './QuestionResult.css';
import { ITest, IQuestion, IAnswer, IUserResult } from '../../redux/interface';
import {GLOBAL_PATH_API} from '../../Global'
import { useHistory } from "react-router-dom";
import {PlayerMp3} from '../../common/audio';

type TQuestionResult={
  tp:ITest|null
  tR:IUserResult
  currQuest:IQuestion|null
  userAnswer:IAnswer|null
  rightAnswer:IAnswer|null
  onNext:()=>void
  testIsDone:()=>void
  result?:string|null
  cQ:number
  rightansertext?:string|null
  wronganswertext?:string|null
  rightanserpic?:string|null
  wronganswerpic?:string|null
}

const QuestionResult:FC<TQuestionResult>=({tp,currQuest,userAnswer,onNext,tR,testIsDone,result,cQ,
rightAnswer//rightansertext,wronganswertext,rightanserpic,wronganswerpic
})=>{

  if (!tp||!currQuest||(tp.endOnWrong&&!currQuest.win)) return <></>
  //if (tp.endOnWrong&&!currQuest.win) return <></>

  let isNext=(!tp.endOnWrong||currQuest.win);

  let timerId=setTimeout(()=>{ testIsDone();  if (isNext) onNext();},tp.timeQuestResult)

  let onNextLocal=()=>{ clearTimeout(timerId); testIsDone(); if (isNext) onNext();}

//Статистика ответов
  let questAll=currQuest.selectcounter;
  let inpAnswer=currQuest.answerinputcounter;
  let prop=currQuest.win?inpAnswer:(questAll-inpAnswer)
  let statistic=!currQuest.istextanswer?Math.round((100/(questAll))*(userAnswer?userAnswer.selectcounter:currQuest.answerinputcounter)):Math.round((100/(questAll))*prop);


// Если парамет показывать результат сразу и пользователь сделал выбор то показываем результат ответа на вопрос
  if(tp.type_levelgame&&currQuest.isChecked){
    //Музыкальное сопровождение в зависимости от того правильный ответ или нет
    if (currQuest.win) PlayerMp3.rightchoice(cQ); else PlayerMp3.wrongchoice(cQ);
      return  <>
          <div className="BlockLayer" onClick={onNextLocal} ></div>
          <div className={"QuestionResultDefault "+(!currQuest.win?"wrong":"")} onClick={onNextLocal}>
          {currQuest.img&&<img className="picquestion" src={GLOBAL_PATH_API+'/'+currQuest.img}/>}
          {!currQuest.istextanswer?<>
          <div className="rightanswertext">Правильный ответ: {rightAnswer&&rightAnswer.anstext}</div>
          {!currQuest.win&&<><div className="wronganswertext">Ваш ответ: {userAnswer&&userAnswer.anstext}</div>}
          <div className="wronganswerpic">{userAnswer&&userAnswer.img&&<img src={GLOBAL_PATH_API+'/'+userAnswer.img}/>}</div></>}
          <div className="rightanswerpic">{rightAnswer&&rightAnswer.img&&<img src={GLOBAL_PATH_API+'/'+rightAnswer.img}/>}</div>
          </>:<>
          <div className="rightanswertext">Правильный ответ: {currQuest.textanswer.split("/")[0]}</div>
          {!currQuest.win&&<div className="wronganswertext">Ваш ответ: {currQuest.inputAnswer}</div>}
          </>
          }
          {!result?<div className="result" data-result={currQuest.win?"Поздравляем!!! Это правильный ответ!":"К сожалению это не правильно..."}></div>
          :<div className="result">{result}</div>}
          {(statistic>0)&&<div className="stat">(Так же считают {statistic} % отвечающих)</div>}
          {currQuest.comment&&<div className="comment">{currQuest.comment}</div>}
          <button style={{"width":"0.1px","height":"0.1px","opacity":"0","overflow":"hidden","position":"absolute"}} autoFocus={true} onKeyPress={onNextLocal}></button>
          <div className="add_div1"></div>
          </div>
      </>}
  return <></>
}

export default QuestionResult
