import React,{useEffect} from 'react';
import './AllTestResult.css';
//import Share from '../share/share';
//import {GLOBAL_PATH_SITE,GLOBAL_PATH_API} from '../../Global'

const AllTestResult=({atr,getAllTestResult,deleteUserResult})=>{
//   useEffect(() => {
//       if (match.params.testsession) getTestResult(match.params.testsession);
// },[match.params.testsession]);
getAllTestResult();

const del=(e,session)=>{
   e.preventDefault();
   deleteUserResult(session)
}

let datec=(date)=> // date в формате дд.мм.гггг
{
//    d=new Date();
//    if (date) {
      var d = (new Date(date.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'))).getTime();
//    }
//    new Date((new Date(date.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'))).getTime());
//    + (days * 24 * 60 * 60 * 1000));
      return d;
//    return [d.getDate(), d.getMonth() + 1, d.getFullYear()].join('.');
}

 let alltestresultlist=atr.map((tr)=>{
    let timeend=(new Date(datec(tr.datetimeend)));
    let timetest=(new Date(datec(tr.datetimeend)-datec(tr.datetimestart)));
    return <a href={"/testresult/"+tr.session}  target="_blank"
         className={tr.finished<1?"notfinished allresultlistitem":"allresultlistitem"}>
    <div>Тест: {tr.testname} </div>
    <div>{tr.datetimeend} </div>
    <div>Пройдено за: {timetest.getMinutes()} мин. {timetest.getSeconds()} сек.</div>
    <div>Вопросов: {tr.questcol}</div>
    <div>Правильных ответов: {tr.win}</div>
    <div>Набранных баллов: {tr.totalscore}</div>
    <div> {tr.first_name} {tr.last_name}</div>
    <div>{tr.finished<1?"Не закончен":"Пройден"}</div>
    <div><button onClick={(e)=>{del(e,tr.session)}}>Удалить</button></div>
    </a>//:<></>
 });
 return <div> <div className="allresultlist">Результаты ваших тестов
    {alltestresultlist}
    {/*<button onClick={getAllTestResult}>Download</button>*/}
 </div>
 </div>
}
export default AllTestResult;
