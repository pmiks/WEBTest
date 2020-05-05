import React from 'react';
import './testslist.css'

const QuestionEditTools=({editMode,isDoneTest,currentQuestion,idTest,list
                        ,onSave,onCancel,addQuest,onEditMode,offEditMode,onPrev,onNext,addNewAnswer
                      ,deleteQuestion,selectTest,unloadFlugON,saveAll,unloadTest,dataIsChanged,addTicket
                      ,checkTest,currentTest,onPublicate})=>{
let editDone=()=>{
        unloadFlugON();
        onSave();
        offEditMode();
    }

let editNotSave=()=>{
  if (!dataIsChanged||(dataIsChanged&&window.confirm("Вы уверены что хотите выйти не сохраняя изменения"))){
    unloadFlugON();
  //  unloadTest();
    offEditMode();
    return;
  }
}


let onNextLocal=()=>{
        //onSave(list[currentQuestion]);
      }
      let tool = document.getElementById('tool');

        let listener = (e)=>{
            let tool = document.getElementById('toolpanel');
          tool.style.left=(e.clientX -30)+"px";
          tool.style.top=(e.clientY-30)+"px";
        };

      function hide() {
//          let tool = document.getElementById('toolpanel');
//          alert(tool.hidden);
//          if (tool.hidden==="true") tool.hidden="false"; else tool.hidden="true";
           }
      function move(e) {document.addEventListener('mousemove',listener); }
      function stop(e) {document.removeEventListener('mousemove',listener); }

  return <div className="edittools" onMouseDown={move} onBlur={stop} onMouseUp={stop} id="toolpanel">
      {editMode&&<div className="header" onClick={hide}>Панель инструментов</div>}
      {/*!editMode&&!isDoneTest&&<button onClick={onEditMode}>Редактировать</button>*/}
      {editMode&& <button onClick={()=>{addQuest(idTest)}}>Добавить вопрос</button>}
      <button disabled={currentQuestion<0&&"disabled"} onClick={()=>{deleteQuestion(list[currentQuestion].id)}}>Удалить вопрос &times;</button>
      <div className="delimiter"></div>
      {editMode&& <button disabled={currentQuestion<0&&"disabled"} onClick={()=>{addNewAnswer(list[currentQuestion].id)}}>Добавить ответ</button>}
      <div className="delimiter"></div>
      <button onClick={()=>{addTicket()}}>Добавить билет</button>
      <div className="delimiter"></div>
      {editMode&&!isDoneTest&&<button onClick={editDone}>Завершить {dataIsChanged&&"и сохранить"}</button>}
      {editMode&&!isDoneTest&&<button  onClick={editNotSave}>{dataIsChanged?"Выйти без сохранения":"Выход"}</button>}
      <div className="delimiter"></div>
      {editMode&& <button onClick={checkTest}>Проверить на ошибки</button>}
      {currentTest&&editMode&& <button onClick={onPublicate}>{!currentTest.published?"Опубликовать":"Снять с публикации"}</button>}
      <div className="delimiter"></div>
      {editMode&& <button disabled={!dataIsChanged&&"disabled"} onClick={onSave}>Сохранить</button>}
      {editMode&& <button disabled={!dataIsChanged&&"disabled"} onClick={onCancel}>Отменить</button>}
      <div className="delimiter"></div>
      <div>
      {editMode&&onPrev&& <button onClick={onPrev}>Предыдущий</button>}
      {editMode&&onNext&& <button onClick={onNext}>Следующий</button>}
      </div>


  </div>
};

export default QuestionEditTools;
