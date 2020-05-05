import React from 'react';
import './testslist.css';
import LoadImage from './LoadImage';

const QuestionItem=({editMode,question,
     saveAnswer,editAnswer,deleteAnswer,addNewAnswer,editQuestion,deleteQuestion,setUserChoiseAnswer,
      onNext,onPrev,onEnd,saveQPhoto,saveAPhoto,testIsDone,
      deleteAnswerPhoto,deleteQuestionPhoto,onInputAnswer,
      checkChoise,tp})=>{
  let saveQP=(e,id)=>{ if(e.target.files.length) saveQPhoto(id,e.target.files[0]);  }
  let saveAP=(e,id)=>{ if(e.target.files.length) saveAPhoto(id,e.target.files[0]); }
  debugger;
  return (<div className="question">

              {editMode&&<QFieldEdit quest={question}
                           onDel={()=>{deleteQuestion(question.id)}}
                           onEdit={editQuestion}
                           saveQPhoto={(e)=>{saveQP(e,question.id)}}
                           deleteQuestionPhoto={deleteQuestionPhoto}
                 />}
               {!editMode&&  <QField quest={question} showNumQuest={tp.showNumQuest}/>}
              <div>
              {editMode&&question.istextanswer&&<AFieldInputEdit quest={question} onEdit={editQuestion}/>}
              {editMode&&<div className="answerlistedit">{question.ans.map((answers)=>{
                return <AFieldEdit answer={answers} idQ={question.id} onEdit={editAnswer}
                            onDelete={()=>{deleteAnswer(question.id,answers.id)}}
                            onSavePic={(e)=>{saveAP(e,answers.id)}}
                            onDeletePic={()=>{deleteAnswerPhoto(answers.id)}} />
                })}</div>
               }
               {!editMode&&!question.istextanswer&&<div className="answerlist">{question.ans.map((answers)=>{
                   return <AField answer={answers}
                                  onSelect={()=>{checkChoise(question.id,answers.id)}}
                                  win={question.win}
                                  type_levelgame={tp.type_levelgame}
                                  isChecked={question.isChecked}
                                  showNumAns={tp.showNumAns}
                                  />})}</div>
                  }
                  {!editMode&&question.istextanswer&& <AFieldInput quest={question} onInputAnswer={onInputAnswer}/>}
                {editMode&&<QCommentField  quest={question} onEdit={editQuestion}/>}
              </div>
    </div>);

}
/*

editMode - режим отрисовки (просмотр/редактирование)
idQuest - id вопроса
qestion - контейнер вопроса
onEdit - calback при изменении вопроса
onDel - calback при удалении вопроса
*/
const QField=({quest,showNumQuest,className})=>{
  return <div className={className?className:"questionitem"}>
      {quest.img&&<div className="questionitempic"><img src={window.global.GLOBAL_PATH_SRC+quest.img}/></div>}
      {quest.question&&<div className="questionitemtext">{showNumQuest&&quest.num+'. '}{quest.question}</div>}
    </div>
}

const QFieldEdit=({editMode,quest,onEdit,onDel,saveQPhoto,deleteQuestionPhoto,className})=>{
return  <div className={className?className:"questionedit"}>
         <div id="pic">
            <LoadImage zoomer="true" width="100px" height="100px" img={quest.img} onLoad={saveQPhoto} onDel={()=>{deleteQuestionPhoto(quest.id)}}/>
         </div>
        <div className="questiontext">
            <textarea onChange={(e)=>onEdit(quest.id,e.target.value)} value={quest.question} />
        </div>
        <div className="option">
            <div><button onClick={onDel}>&times;</button></div>
            <div>Текстовый ввод ответа
            <input type="checkbox" checked={quest.istextanswer} onChange={(e)=>{onEdit(quest.id,null,null,null,e.target.checked)}}/></div>
            <div>Автом. добавить ответы:<input style={{width:"2em"}} type="text" value={quest.addalter} onChange={(e)=>{onEdit(quest.id,null,null,null,null,null,e.target.value)}}/></div>
        </div>
      </div>
}

const QCommentField=({quest,onEdit,className})=>{
return <div>
        <div className={className?className:"questioncomment"}>
            <label>Коментарий к тесту</label>
            <textarea onChange={(e)=>onEdit(quest.id,null,null,e.target.value)} value={quest.comment} />
        </div>
      </div>
}



const AField=({answer,win,isChecked,type_levelgame,onSelect,showNumAns,className})=>{
  return    <div id={answer.id}  onClick={onSelect}
                 className={"answeritem "+(answer.uch ? (type_levelgame&&win?"rightitem":(type_levelgame&&!win?"wrongitem":"itemselected")):(type_levelgame&&isChecked&&answer.truth?"rightitem":"item"))}>
                 <div className="nn">  {showNumAns&& (answer.num+". ")} </div>
                 <div className="pic">{answer.img&&<img src={window.global.GLOBAL_PATH_SRC+answer.img}/>}</div>
                 <div className="answer"> {answer.anstext}</div>
            </div>

}



const AFieldInputEdit=({ansUserText,onEdit,className,quest})=>{
  return <div className={className?className:"answerinputitem"}>
                 <div className="answer">
                    <input type="text" value={quest.textanswer} onChange={(e)=>{onEdit(quest.id,null,null,null,null,e.target.value)}} type="input" />
                 </div>
          </div>
}


const AFieldInput=({ansUserText,onInputAnswer,className,quest})=>{
  return <div className={className?className:"answerinputitem"}>
   <div className="answer">
                    <input type="text" value={quest.inputAnswer} onChange={(e)=>{onInputAnswer(e.target.value)}} type="input" />
                    <button onClick={()=>{onInputAnswer(null,true)}}>Ответить</button>
                 </div>
    </div>
  }

const AFieldEdit=({answer,className,onEdit,onDelete,onSavePic,onDeletePic,idQ})=>{
  return  <div className={className?className:"answerlistedit"}>{!answer.deleted&&
     <div className={answer.truth ? "answeredit rightitem":"answeredit"}>
      <div className={"pic"}>
      <LoadImage zoomer="true" width="100px" height="100px" img={answer.img} onLoad={onSavePic} onDel={()=>{onDeletePic(answer.id)}}/>
      </div>
      <div className="answer">
      <textarea onChange={(e)=>{onEdit(idQ,answer.id,e.target.value)}} type="input" value={answer.anstext} />
      </div>

      <div className="options">
        <input type="text" placeholder="Баллы" name="score"/>
        <div><input type="checkbox" name="isTrue" checked={answer.truth} onChange={(e)=>{onEdit(idQ,answer.id,null,null,e.target.checked)}}/>
        Правильный ответ</div>
        {onDelete&&<button onClick={onDelete}>Удалить вариант</button>}
      </div>

      </div>
  }</div>

}


export default QuestionItem;
