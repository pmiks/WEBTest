import TicketsEdit from './TicketTestEdit';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withEditMode} from '../../common/myhocs';
import {editTicketAC,
        //saveTicketsTC,
//        nextQuestionTC,
//        unloadTestAC,
//        prevQuestionAC,
        addTicketAC,
        addQuestionToTicketAC,
        deleteTicketAC} from '../../redux/reducerTests2';
import {getCurrentTestSEL,getTicketListSEL,getCurrentTestParamSEL,getCurrentQuestionSEL,getTestResultSEL,getCurrentAnswerSEL} from '../../redux/test-selectors';

const mapStateToProps=(state)=>{
  return {
      ticketlist:getTicketListSEL(state),
      currentQuestion:getCurrentQuestionSEL(state),
      currentTest:getCurrentTestSEL(state),

//    tp:getCurrentTestParamSEL(state),
//    allIsChecked:state.Tests.allIsChecked
  }
}

export default compose (
    connect(mapStateToProps,{
      addTicket:addTicketAC,
      addQuestionToTicket:addQuestionToTicketAC,
      deleteTicket:deleteTicketAC,
      editTicket:editTicketAC,
//      saveTickets:saveTicketsTC
//      onNext:nextQuestionTC,
//      onPrev:prevQuestionAC,
//      testIsDone:testIsDoneAC,
    }),
    withEditMode
)
(TicketsEdit)
