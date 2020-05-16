import React,{useState,useEffect} from 'react';
import './TestResultEdit.css';
//import {Redirect,NavLink} from 'react-router-dom';

export interface ITestResult{
  idTest:number,
  result:any[],
  getResult(id:number):void
}


const TestResult:React.FC<ITestResult>=({idTest,result,getResult})=>{
  getResult(idTest);
  return <div className="testresult">Результаты теста
  {result&&result.map(r=>{
    return <div>{r.result}</div>
  })}
  </div>
}

export default TestResult
