import React from 'react';
import './testslist.css';


// questnum:q.num,
// questionid:q.id,
// notrightansw:!q.ans.some(a=>a.truth),
// colansw:q.ans.length,
// uniqueAnswer:!uniqueArray(q.ans)

const TestCheck=({check,goToQuest})=>{
  debugger;

if (check) {  return <div className={check.errors==0?"TestCheckGreen":"TestCheckRed"}>
    <div>Ошибок:{check.errors} Предупреждений {check.warnings}</div>
    {check.List.map((c)=>{
              return <div>
          {c.notrightansw&&"Error!!! Не отмечен правильный ответ."}
          {c.notuniqueAnswer&&"Error!!! Несколько повторяющихся вариантов."}
          {c.emptyAnswer&&"Error!!! Пустые варианты ответов."}
          {c.emptyInputAnswer&&"Error!!! Пустое поле правильного ответа."}
          {!c.notchoice&&c.colansw&&"Warninig!!! Количество вариантов ответа меньше чем по умолчанию." }
          {c.notchoice&&"Error!!! Нет вариантов ответа."}
          {c.notalter&&"Error!!! Нет альтернативных вариантов."}
          ... вопрос №<button onClick={()=>{goToQuest(c.questionid)}}> {c.questnum} </button>
        </div>
    })}
  </div>}
  else {return <></>}
}

export default TestCheck;
