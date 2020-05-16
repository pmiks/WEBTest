import React from 'react';
import '../testslist.css';
import {useHistory} from 'react-router-dom';

const QuestionEditTools=({
  // editMode,
  // isDoneTest,
  currentQuestion,
  idTest,
  list,
  onSave,
  onCancel,
  addQuest,
  // onEditMode,
  // offEditMode,
  onPrev,
  onNext,
  addNewAnswer,
  deleteQuestion,
  // selectTest,
  // unloadFlugON,
  // saveAll,
  // unloadTest,
  ticketlist,
  dataIsChanged,
  selectTestEdit,
  addTicket,
  checkTest,
  currentTest,
  onPublicate
})=>{
const history=useHistory();
let editDone=()=>{
//        unloadFlugON();
      onSave();
      selectTestEdit(-1)
      history.push('/personalarea/mytests');
  //      offEditMode();
    }

let editNotSave=()=>{
  if (!dataIsChanged||(dataIsChanged&&window.confirm("Вы уверены что хотите выйти не сохраняя изменения"))){
    selectTestEdit(-1)
    history.push('/personalarea/mytests');
  //  unloadFlugON();
  //  unloadTest();
//    offEditMode();
    return;
  }
}

 // onPublicate=()=>{
 //     this.props.publicate();
// //    this.props.saveAllQuestions(this.props.list,this.props.currentTest);
// }


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
      <div className="header" onClick={hide}>Панель инструментов</div>
      {/*!editMode&&!isDoneTest&&<button onClick={onEditMode}>Редактировать</button>*/}
      <button onClick={()=>{addQuest(idTest)}}>Добавить вопрос</button>
      <button disabled={currentQuestion<0&&"disabled"} onClick={()=>{deleteQuestion(list[currentQuestion].id)}}>Удалить вопрос &times;</button>
      <div className="delimiter"></div>
      <button disabled={currentQuestion<0&&"disabled"} onClick={()=>{addNewAnswer(list[currentQuestion].id)}}>Добавить ответ</button>
      <div className="delimiter"></div>
      <button disabled={currentQuestion<0&&"disabled"} onClick={()=>{addTicket()}}>Добавить билет</button>
      <div className="delimiter"></div>
      <button onClick={editDone}>Завершить {dataIsChanged&&"и сохранить"}</button>
      <button  onClick={editNotSave}>{dataIsChanged?"Выйти без сохранения":"Выход"}</button>
      <div className="delimiter"></div>
      <button onClick={checkTest}>Проверить на ошибки</button>
      {currentTest&&<button disabled={dataIsChanged&&"disabled"} onClick={onPublicate}>{!currentTest.published?"Опубликовать":"Снять с публикации"}</button>}
      <div className="delimiter"></div>
      <button disabled={!dataIsChanged&&"disabled"} onClick={onSave}>Сохранить</button>
      <button disabled={!dataIsChanged&&"disabled"} onClick={onCancel}>Отменить</button>
      <div className="delimiter"></div>
      <div>
      {onPrev&& <button onClick={onPrev}>Предыдущий</button>}
      {onNext&& <button onClick={onNext}>Следующий</button>}
      </div>


  </div>
};

export default QuestionEditTools;
