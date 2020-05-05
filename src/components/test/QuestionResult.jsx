import React from 'react';
import './testslist.css';


const QuestionResult=(props)=>{
  let isNext=(!props.tp.endOnWrong||props.currQuest.win);
  let timerId=isNext?setTimeout(props.onNext,props.tp.timeQuestResult):null;
  let questAll=props.currQuest.selectcounter;
  let inpAnswer=props.currQuest.answerinputcounter;
  let prop=props.currQuest.win?inpAnswer:(questAll-inpAnswer)

  let statistic=!props.currQuest.istextanswer?Math.round((100/(questAll))*(props.currAns.selectcounter))
  :Math.round((100/(props.currQuest.selectcounter))*prop);
  let onNextLocal=()=>{
    clearTimeout(timerId);
    if (isNext){
        props.onNext();
    }
    if (props.tR.allIsChecked) props.testIsDone();
  }

  let exit=()=>{
    props.unloadFlugON();
    props.unloadTest();
  }
  if(props.tp.type_levelgame&&props.currQuest.isChecked){
  return  <div> <div className="BlockLayer" onClick={onNextLocal}></div>
      <div className={"QuestionResult "+(!props.currQuest.win?"wrong":"")} onClick={onNextLocal}>
      {props.currQuest.win&&<div>Поздаравляем это правильный ответ</div>}
      {!props.currQuest.win&&<div>К сожалению это не правильно</div>}
      <div>Так же отвечают {statistic} % людей </div>
      {/*isNext&&<div><button onClick={onNextLocal}>Продолжаем</button></div>*/}
      {props.tp.endOnWrong&&!props.currQuest.win&&<div><button onClick={props.onRepeat}>Попробовать еще раз</button></div>}
      {props.tp.endOnWrong&&!props.currQuest.win&&<div><button onClick={exit}>Вернуться на главную страницу</button></div>}
      </div>
  </div>}
  return <></>
}

export default QuestionResult
