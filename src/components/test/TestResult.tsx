import React,{useEffect,useState, FC} from 'react';
//import './TestResult.css';
import Share from '../share/share';
import {GLOBAL_PATH_SITE,GLOBAL_PATH_API} from '../../Global'
import {numBetween} from '../../common/functions';
import { IUserResult, IResult } from '../../redux/interface';
import { useHistory } from 'react-router-dom';
import { PlayerMp3 } from '../../common/audio';

type TTestResult={
  tr:IUserResult
  match:any
  result:Array<IResult>
  getTestResult:(session:string)=>void
  getResult:(id:number)=>void
  win?:number
}

const TestResult:FC<TTestResult>=({tr,match,result,getTestResult,getResult,win})=>{
  let [showErr,setShowErr]=useState(true);
  let history = useHistory();
  useEffect(() => {
      if (match.params.testsession) {
        getTestResult(match.params.testsession);
        setShowErr(false)
      }
    },[match.params.testsession]);

  useEffect(() => {
      getResult(tr.id);
  },[tr.id]);

  let exit=()=>{  history.push("/");  }

  let repeat=()=>{  history.push(`/test/${tr.id}`);  history.go(0); }


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
//   let itogpercent=Math.round((100/tr.resquestion.length)*rightanswer)
   let itogpercent=((win==null||win==undefined)?Math.round((100/tr.anscol)*rightanswer):(win>0?Math.round((100/tr.anscol)*win):0))
//   let itogwin=false
   let img=""
   result&&result.forEach(r=>{if (numBetween(itogpercent,r.startpercent,r.endpercent)) {
     resumeString=resumeString+r.result
//     itogwin=Boolean(r.win)
     img=r.img
   }})
   if (win!==undefined&&win!==null){
     if (win>0) PlayerMp3.rightchoice(win); else PlayerMp3.wrongchoice(rightanswer);
   }

   return <>
            {tr&&<>
              <div className="add_bs"></div>
              <div className="testres">
                <div className="add_div1"></div>
                <div className="add_div2"></div>
                <div className="add_div3"></div>
                <div className="header">Результаты теста: {tr.testname}</div>
                <div className="stat"> Правильных ответов {rightanswer} из {tr.resquestion.length}</div>
                <div className="statpercent">({itogpercent}% )</div>
                <div className="statscore">Баллы {score}</div>
                <div className="resumeString">{resumeString}</div>
                <div className={showErr?"errors":"errors hide"}>{errorsResult}</div>
                <div className={img?"statimg":"statimg hide"}><img src={img}/></div>
                <div className={"snsharing"}><Share url={GLOBAL_PATH_SITE+"/testresult/"+tr.sessionID} title={"Результаты теста: "+tr.testname} img={GLOBAL_PATH_SITE+"/"+tr.testcover} size="30px"/></div>
                <div className="testbtn btnrepeat" onClick={repeat}>Попробовать еще раз</div>
                <div className="testbtn btngomainpage" onClick={exit}>Вернуться на главную страницу</div>

              </div>
            </>}
           </>
 }




export default TestResult;
