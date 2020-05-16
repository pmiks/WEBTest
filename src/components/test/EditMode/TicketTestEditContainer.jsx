import TicketsEdit from './TicketTestEdit';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../../common/myhocs';
import {editTicketAC,
        //saveTicketsTC,
//        nextQuestionTC,
//        unloadTestAC,
//        prevQuestionAC,
        addTicketAC,
        addQuestionToTicketAC,
        deleteTicketAC} from '../../../redux/reducerTestsEdit';
import {
//   getCurrentTestSEL,
   getTicketEditListSEL,
   getCurrentEditQuestionSEL,
   getCurrentEditTestSEL,
//   getCurrentTestParamSEL,
//   getCurrentQuestionSEL,
//   getTestResultSEL,
//   getCurrentAnswerSEL
} from '../../../redux/test-selectors';

const mapStateToProps=(state)=>{
  return {
      ticketlist:getTicketEditListSEL(state),
      currentQuestion:getCurrentEditQuestionSEL(state),
      currentTest:getCurrentEditTestSEL(state),
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
    withAuthRedirect
)
(TicketsEdit)
