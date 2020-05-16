import Tickets from './TicketTest';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withEditMode} from '../../common/myhocs';
//import {setTicketTestAC,editTicketAC,saveTicketsTC,nextQuestionTC,unloadTestAC,prevQuestionAC,addTicketTC,addQuestionToTicketAC,deleteTicketTC} from '../../redux/reducerTests2';
import {setTicketTestAC} from '../../redux/reducerTests2';
//import {getCurrentTestSEL,getTicketListSEL} from '../../redux/test-selectors';
import {getTicketListSEL} from '../../redux/test-selectors';
const mapStateToProps=(state)=>{
  return {
      ticketlist:getTicketListSEL(state),
//      currentTest:getCurrentTestSEL(state),
  }
}

export default compose (
    connect(mapStateToProps,{
//      selectTicket:selectTicketTC
    setTicketTest:setTicketTestAC
    }),
//    withEditMode
)
(Tickets)
