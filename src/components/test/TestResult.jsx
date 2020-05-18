import React,{useEffect,useState} from 'react';
import './TestResult.css';
import Share from '../share/share';
import {GLOBAL_PATH_SITE,GLOBAL_PATH_API} from '../../Global'
import {numBetween} from '../../common/functions';

const TestResult=({tr,match,result,getTestResult,getResult})=>{
  let [showErr,setShowErr]=useState(true);
  useEffect(() => {
      if (match.params.testsession) {
        getTestResult(match.params.testsession);
        setShowErr(false)
      }
    },[match.params.testsession]);

  useEffect(() => {
      getResult(tr.id);
  },[tr.id]);

   let rightanswer=0;
   let score=0
   let errorsResult=tr.resquestion
     .map((q,i)=> {score=score+q.score; if (q.result) rightanswer++; else {
       return <div className="item">
              <div className="num">№{i+1} </div>
              {q.resFill.imgQ&&<div className="qimg"><img src={GLOBAL_PATH_API+'/'+q.resFill.imgQ}/></div>}
              <div className="questtext">{q.resFill.question}</div>
              <div className="rightresult">Правильный ответ {q.resFill.imgAR&&<img src={GLOBAL_PATH_API+'/'+q.resFill.imgAR}/>} "{q.resFill.anstextR}"
              <div className="statres"> Правильно отвечают: {Math.round(q.resFill.statR*(100/q.resFill.statT))}%</div></div>
              <div className="wrongresult">Ваш выбор {q.resFill.imgAU&&<img src={GLOBAL_PATH_API+'/'+q.resFill.imgAU}/>} "{q.resFill.anstextU}"
              <div className="statres"> Так же отвечают: {Math.round(q.resFill.statU*(100/q.resFill.statT))}%</div></div>
              </div>}
     });
   let resumeString=""
   let itogpercent=Math.round((100/tr.resquestion.length)*rightanswer)
   let itogwin=false
   let img=""
   result&&result.forEach(r=>{if (numBetween(itogpercent,r.startpercent,r.endpercent)) {
     resumeString=resumeString+r.result
     itogwin=r.win
     img=r.img
   }})

   return <div>
            {tr&&<><div className="testres">
                <div className="header">Результаты теста: {tr.testname}</div>
                <div className="stat"> Правильных ответов {rightanswer} из {tr.resquestion.length}</div>
                <div className="statpercent">({itogpercent}% )</div>
                <div className="statscore">Баллы {score}</div>
                <div className="resumeString">{resumeString}</div>
                <div className={showErr?"errors":"errors hide"}>{errorsResult}</div>
                <div className={img?"statimg":"statimg hide"}><img src={img}/></div>
             </div>
             <div style={{"padding-top":"10px","padding-bottom":"100px"}}><Share url={GLOBAL_PATH_SITE+"/testresult/"+tr.sessionID} title={"Результаты теста: "+tr.testname} img={GLOBAL_PATH_SITE+"/"+tr.testcover} size="30px"/></div>
            </>}
           </div>
 }




export default TestResult;
