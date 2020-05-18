import React,{useState,useEffect} from 'react';
import './TestResultEdit.css';
//import {Redirect,NavLink} from 'react-router-dom';

export interface ITestResult{
  idTest:number,
  result:any[],
  setResultItem(data:any):void
  addResultItem():void
  deleteResultItem(id:number):void
  saveResult(data:any):void
}


const TestResult:React.FC<ITestResult>=({idTest,result,setResultItem,addResultItem,deleteResultItem,saveResult})=>{
  return <div className="testresult">Результаты теста
 <div className="testresultitem header">
 <div>Мin. баллы</div>
 <div>Мax. баллы</div>
 <div>Мin. %</div>
 <div>Мax. %</div>
 <div>Текст результата</div>
 <div>Тест пройден</div>
 </div>
  {result&&result.map((r)=>{
    if (r.deleted) return <></>
    return <div className="testresultitem">
      <div><input onChange={(e)=>{setResultItem({...r,scorestart:e.currentTarget.value})}} style={{"width":"3em"}} value={r.scorestart}/></div>
      <div><input onChange={(e)=>{setResultItem({...r,scoreend:e.currentTarget.value})}} style={{"width":"3em"}} value={r.scoreend}/></div>
      <div><input onChange={(e)=>{setResultItem({...r,startpercent:e.currentTarget.value})}} style={{"width":"3em"}} value={r.startpercent}/></div>
      <div><input onChange={(e)=>{setResultItem({...r,endpercent:e.currentTarget.value})}} style={{"width":"3em"}} value={r.endpercent}/></div>
      <div><textarea onChange={(e)=>{setResultItem({...r,result:e.currentTarget.value})}} value={r.result}/></div>
      <div><input onChange={(e)=>{setResultItem({...r,win:e.target.checked})}} type="checkbox" checked={r.win!=0}/></div>
      <div><button onClick={()=>{deleteResultItem(r.id)}}>x</button></div>
      </div>
  })}
  <button onClick={()=>{addResultItem()}}>Добавить</button>
  <button onClick={()=>{saveResult(result)}}>Сохранить</button>
  </div>
}

export default TestResult
