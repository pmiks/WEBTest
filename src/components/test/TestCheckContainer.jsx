import TestCheck from './TestCheck';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withEditMode} from '../../common/myhocs';
import {editTicketAC,
        addTicketAC,
        addQuestionToTicketAC,
        setCurrentQuestionAC,
        deleteTicketAC} from '../../redux/reducerTests2';
import {getCurrentTestSEL,getTicketListSEL,getCurrentTestParamSEL,getCurrentQuestionSEL,getTestResultSEL,getCurrentAnswerSEL} from '../../redux/test-selectors';

const mapStateToProps=(state)=>{
  return {
    check:state.Tests.check
//      ticketlist:getTicketListSEL(state),
//      currentQuestion:getCurrentQuestionSEL(state),
//      currentTest:getCurrentTestSEL(state),
  }
}

export default compose (
    connect(mapStateToProps,{
        goToQuest:setCurrentQuestionAC
//      addTicket:addTicketAC,
//      addQuestionToTicket:addQuestionToTicketAC,
//      deleteTicket:deleteTicketAC,
//      editTicket:editTicketAC,
    }),
    withEditMode
)
(TestCheck)
