import React from 'react';
import './testslist.css';
import { useState } from 'react';
import LoadImage from './LoadImage';

const TestEdit=({tp,setTP,saveTestCoverImg,deleteTestCoverImg})=>{

  let saveTCI=(e,id)=>{alert(id); if(e.target.files.length) saveTestCoverImg(id,e.target.files[0]);  }
  return <div className="testedit">
      <div><LoadImage zoomer="true" id={"test"+tp.id} width="200px" height="100px" img={tp.coverimg} onLoad={(e)=>{saveTCI(e,tp.id)}} onDel={()=>{deleteTestCoverImg(tp.id)}}/></div>
      <div><label>Название теста</label>
           <input value={tp.testname} type="input" onChange={(e)=>{setTP({...tp,testname:e.currentTarget.value})}}/></div>
      <div><label>Количество вариантов ответов по умолчанию</label>
           <input style={{"width":"2em"}} type="input" value={tp.defaultAnswerCol} onChange={(e)=>{setTP({...tp,defaultAnswerCol:e.currentTarget.value})}}/></div>
      <div><label>Вопрос по умолчанию</label>
           <input value={tp.defaultQuestion} onChange={(e)=>{setTP({...tp,defaultQuestion:e.currentTarget.value})}} type="input"/></div>
      <div><label>Ответ по  умолчанию</label>
           <input value={tp.defaultAnswer} onChange={(e)=>{setTP({...tp,defaultAnswer:e.currentTarget.value})}} type="input"/></div>
           <div><label>Автоматически добавлять неверные варианты ответа:</label>
                <input style={{"width":"2em"}} value={tp.addalter} onChange={(e)=>{setTP({...tp,addalter:e.currentTarget.value})}} type="input"/></div>

      <div><label>Время для ответа на вопрос</label>
          <input style={{"width":"4em"}} value={tp.questiontime} onChange={(e)=>{setTP({...tp,questiontime:e.currentTarget.value})}} type="input"/></div>
      <div><label>Время для прохождения теста</label>
          <input style={{"width":"4em"}} value={tp.testtime} onChange={(e)=>{setTP({...tp,testtime:e.currentTarget.value})}} type="input"/></div>


      <div><label className="checktype">Показывать нумерацию вопросов</label>
           <input checked={tp.showNumQuest} onChange={(e)=>{setTP({...tp,showNumQuest:e.target.checked})}} type="checkbox"/></div>
      <div><label className="checktype">Показывать нумерацию ответов</label>
           <input checked={tp.showNumAns} onChange={(e)=>{setTP({...tp,showNumAns:e.target.checked})}} type="checkbox"/></div>
      <div><label className="checktype">Тест до первого неверного ответа</label>
           <input checked={tp.endOnWrong} onChange={(e)=>{setTP({...tp,endOnWrong:e.target.checked})}} type="checkbox"/></div>
      <div><label className="checktype">Показывать результат ответа сразу</label>
           <input checked={tp.type_levelgame} onChange={(e)=>{setTP({...tp,type_levelgame:e.target.checked})}} type="checkbox"/></div>
      <div><label>Количество допустимых ошибок</label>
           <input style={{"width":"2em"}} value={tp.wrongpermissible} onChange={(e)=>{setTP({...tp,wrongpermissible:e.currentTarget.value})}} type="input"/></div>
           <div><label>Время отображения окна результата вопроса</label>
                <input value={tp.timeQuestResult} onChange={(e)=>{setTP({...tp,timeQuestResult:e.currentTarget.value})}} type="input"/></div>
      <div><label>Отбирать случайным образом</label>
           <input style={{"width":"5em"}} value={tp.limit_quest} onChange={(e)=>{setTP({...tp,limit_quest:e.currentTarget.value})}} type="input"/><label>вопросов</label></div>
      <div><label className="checktype">Сортировать воросы в случайном порядке</label>
           <input checked={tp.shuffleQuestion} onChange={(e)=>{setTP({...tp,shuffleQuestion:e.target.checked})}} type="checkbox"/></div>
      <div><label className="checktype">Сортировать ответы в случайном порядке</label>
           <input checked={tp.shuffleAnswer} onChange={(e)=>{setTP({...tp,shuffleAnswer:e.target.checked})}} type="checkbox"/></div>
  </div>
}

export default TestEdit;
