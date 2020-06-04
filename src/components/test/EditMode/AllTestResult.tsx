import React,{useEffect, FC} from 'react';
import './AllTestResult.css';
import { IResult } from '../../../redux/interface';
//import Share from '../share/share';
//import {GLOBAL_PATH_SITE,GLOBAL_PATH_API} from '../../Global'

type TAllTestResult={
  atr:Array<IResult>
  getAllTestResult:()=>void
  deleteUserResult:(session:string)=>void
}

const AllTestResult:FC<TAllTestResult>=({atr,getAllTestResult,deleteUserResult})=>{
   useEffect(() => {
        getAllTestResult();
    },[]);
//getAllTestResult();

const del=(e:any,session:string)=>{
   e.preventDefault();
   deleteUserResult(session)
}

let datec=(date:string)=> // date в формате дд.мм.гггг
{
      let d = (new Date(date)).getTime();
      return d;
}

 let alltestresultlist=atr&&atr.map((tr:any)=>{
    let timetest=(new Date(datec(tr.datetimeend)-datec(tr.datetimestart)));
//    console.log("datetime "+tr.datetimeend+""+datec(tr.datetimeend));
    return <a href={"/testresult/"+tr.session}  target="_blank"
         className={tr.finished<1?"notfinished allresultlistitem":"allresultlistitem"}>
    <div>{tr.testname} </div>
    <div>{tr.datetimeend} </div>
    <div>{timetest.getMinutes()} мин. {timetest.getSeconds()} сек.</div>
    <div>{tr.questcol}</div>
    <div>{tr.win}</div>
    <div>{tr.totalscore}</div>
    <div>{tr.first_name} {tr.last_name}</div>
    <div>{tr.finished<1?"Прерван":"Закончен"}</div>
    <div><button onClick={(e)=>{del(e,tr.session)}}>Удалить</button></div>
    </a>//:<></>
 });
 return <div> <div className="allresultlist">Результаты ваших тестов

 <div  className={"allresultlistitem"}>
 <div>Тест: </div>
 <div>Закончено</div>
 <div>Потрачено время</div>
 <div>Вопросов всего</div>
 <div>Правильных ответов</div>
 <div>Набранных баллов</div>
 <div> Пользователь</div>
 <div>Прерван/Закончен</div>
 <div></div>
 </div>

    {alltestresultlist}
    {/*<button onClick={getAllTestResult}>Download</button>*/}
 </div>
 </div>
}
export default AllTestResult;
