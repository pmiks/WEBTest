import React from 'react';
import './testslist.css';

const TestsList=(props)=>{
  let onSelect=(list)=>{
//     if (list.tickets.length===0)
      props.selectTest(list.id);
//         else props.showTicketList();
  }
  let editTest=(id)=>{
      props.selectTest(id);
      props.onEditMode();
  }
  return (props.idTest<=0)&&<div className="testlist">{props.testslist&& props.testslist.map(
    l=>{/*if (props.editMode||l.published)*/
      return (props.isAuth||l.published? <div className={!l.published?"testsitem":"testsitem published"}>
                     <div onClick={()=>{onSelect(l)}} className="name">{l.testname}</div>
                     <div>{props.isAuth&&<button onClick={()=>{editTest(l.id)}}>Редактировать</button>}</div>
             </div>:<></>)
    }
  )}</div>
}

export default TestsList
