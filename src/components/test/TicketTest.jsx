import React from 'react';
import './testslist.css';
import { useState } from 'react';

const Tickets=(props)=>{

  return <div className="TicketsList">
          {props.ticketlist&&props.ticketlist.map(tl=>{
                return <div onClick={()=>{props.setTicketTest(tl.id)}}> {tl.ticketname}  </div>})}
          </div>
  }


export default Tickets;
