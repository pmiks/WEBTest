import TestCheck from './TestCheck';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withEditMode} from '../../../common/myhocs';
import {
        // editTicketAC,
        // addTicketAC,
        // addQuestionToTicketAC,
         setCurrentEditQuestion_TC,
        // deleteTicketAC
      } from '../../../redux/reducerTestsEdit';
import {
 //   getCurrentTestSEL,
 //   getTicketListSEL,
 //   getCurrentTestParamSEL,
 //   getCurrentQuestionSEL,
 //   getTestResultSEL,
 //   getCurrentAnswerSEL
} from '../../../redux/test-selectors';

const mapStateToProps=(state)=>{
  return {
    check:state.TestsEdit.check
//      ticketlist:getTicketListSEL(state),
//      currentQuestion:getCurrentQuestionSEL(state),
//      currentTest:getCurrentTestSEL(state),
  }
}

export default compose (
    connect(mapStateToProps,{
        goToQuest:setCurrentEditQuestion_TC
//      addTicket:addTicketAC,
//      addQuestionToTicket:addQuestionToTicketAC,
//      deleteTicket:deleteTicketAC,
//      editTicket:editTicketAC,
    }),
//    withEditMode
)
(TestCheck)
