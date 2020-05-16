import React,{useEffect} from 'react';
import './TestResult.css';
import Share from '../share/share';
import {GLOBAL_PATH_SITE,GLOBAL_PATH_API} from '../../Global'

const TestResult=({tr,match,getTestResult})=>{
  useEffect(() => {
      if (match.params.testsession) getTestResult(match.params.testsession);
},[match.params.testsession]);

   let rightanswer=0;
   let score=0
   let resultTest=tr.resquestion
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
   return <div><div className="testres"> <h1>Результаты теста: {tr.testname}</h1>
             {tr&&<>
               <div className="finalresult"> Правильных ответов {rightanswer} из  {tr.resquestion.length} <div className="statres">({Math.round((100/tr.resquestion.length)*rightanswer)}% )</div>
                {/*Баллы ({score})*/}
               </div>
               {resultTest}
               </>
            }
            </div>
           <div style={{"padding-top":"10px","padding-bottom":"100px"}}><Share url={GLOBAL_PATH_SITE+"/testresult/"+tr.sessionID} title={"Результаты теста: "+tr.testname} img={GLOBAL_PATH_SITE+"/"+tr.testcover} size="30px"/></div>
           </div>
 }



//   let rightanswer=0;
//   let resultTest=props.list
//     .map((q,i)=> {if (q.win) rightanswer++; else {
//       return <div className="item">
//           <div className="num">№{i+1} </div>
//           {q.img&&<div className="qimg"><img src={window.global.GLOBAL_PATH_SRC+q.img}/></div>}
//           <div className="questtext">{q.question}</div>
//
//              {!q.istextanswer&&q.ans.map((a)=>{
//                if (a.uch) return <div className="wrightresult">Ваш выбор {a.img&&<img src={window.global.GLOBAL_PATH_SRC+a.img}/>} {a.anstext} Так же отвечают: {Math.round(a.selectcounter*(100/q.selectcounter))}%</div>
//               if (a.truth) return <div className="wrongresult">Правильный ответ {a.img&&<img src={window.global.GLOBAL_PATH_SRC+a.img}/>} {a.anstext} Правильно отвечают: {Math.round(a.selectcounter*(100/q.selectcounter))}%</div>
//             })}
//             {q.istextanswer&& <div className="wrightresult">Вы ответили: "{q.inputAnswer}" </div>}
//             {q.istextanswer&&!q.win&& <div className="wrongresult">Правильный ответ: "{(q.textanswer.split('/'))[0]}" </div>}
//
//       </div>}
//     });
//   return <div className="testres"> <h1>Результаты теста</h1>
//             {props.list&&<>
//               <div className="finalresult"> Правильных ответов {rightanswer} из  {props.list.length} ({Math.round((100/props.list.length)*rightanswer)}% )</div>
//               {resultTest}
//               </>
//            }
//           </div>
// }

export default TestResult;
