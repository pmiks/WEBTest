import React from 'react';
import './testslist.css'

const TestResult=(props)=>{
  let rightanswer=0;
  let resultTest=props.list
    .map((q,i)=> {if (q.win) rightanswer++; else {
      return <div className="item">
          <div className="num">№{i+1} </div>
          {q.img&&<div className="qimg"><img src={window.global.GLOBAL_PATH_SRC+q.img}/></div>}
          <div className="questtext">{q.question}</div>

             {!q.istextanswer&&q.ans.map((a)=>{
               if (a.uch) return <div className="wrightresult">Ваш выбор {a.img&&<img src={window.global.GLOBAL_PATH_SRC+a.img}/>} {a.anstext} Так же отвечают: {Math.round(a.selectcounter*(100/q.selectcounter))}%</div>
              if (a.truth) return <div className="wrongresult">Правильный ответ {a.img&&<img src={window.global.GLOBAL_PATH_SRC+a.img}/>} {a.anstext} Правильно отвечают: {Math.round(a.selectcounter*(100/q.selectcounter))}%</div>
            })}
            {q.istextanswer&& <div className="wrightresult">Вы ответили: "{q.inputAnswer}" </div>}
            {q.istextanswer&&!q.win&& <div className="wrongresult">Правильный ответ: "{(q.textanswer.split('/'))[0]}" </div>}

      </div>}
    });
  return <div className="testres"> <h1>Результаты теста</h1>
            {props.list&&<>
              <div className="finalresult"> Правильных ответов {rightanswer} из  {props.list.length} ({Math.round((100/props.list.length)*rightanswer)}% )</div>
              {resultTest}
              </>
           }
          </div>
}

export default TestResult;
