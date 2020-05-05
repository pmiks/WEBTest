import React from 'react';
import './testslist.css';
import { useState } from 'react';

const TicketsEdit=(props)=>{
  debugger;
  return <div><div className="TicketsEdit">
      {props.currentQuestion&&props.ticketlist&&props.ticketlist.map(tl=>{
        return !tl.deleted&&<div className="TicketItem">
              <div><input onChange={(e)=>props.addQuestionToTicket(e.target.checked,tl.id)} type="checkbox" checked={tl.questions.some(t=>t==props.currentQuestion.id)}/></div>
              <div><TicketsEditName newt={tl.added} value={tl.ticketname} edit={(e)=>props.editTicket(tl.id,e.currentTarget.value)}/></div>
              <div><button onClick={()=>{props.deleteTicket(tl.id)}}>&#215;</button></div>
            </div>})}
          </div>
{/*  <button onClick={props.addTicket}>Добавить билет</button>
  <button onClick={()=>{props.saveTickets(props.currentTest)}}>Cохранить билеты</button>*/}
  </div>
}

const TicketsEditName=({value,edit,newt})=>{
  let [editMode,setEditMode]=useState(newt);
  let changeMode=()=>{
    if (editMode) setEditMode(false);
          else setEditMode(true);
  }
  return  <>
        {!editMode?<label onDoubleClick={()=>{setEditMode(true)}}>{value}</label>:
        <input autoFocus={true} onChange={edit} onBlur={()=>{setEditMode(false)}} type="text" value={value}/>}
        {/*<button onClick={changeMode}>&#9998;</button>*/}
        </>
}

export default TicketsEdit;
