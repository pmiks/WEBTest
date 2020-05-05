import TestPage from './TestPage';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withAuthRedirect} from '../../common/myhocs';
import {setUserChoiseAnswerAC,
        addNewQuestionThunkCreator,
        deleteQuestionThunkCreator,
        editQuestionThunkCreator,
        editAnswerThunkCreator,
        deleteAnswerThunkCreator,
        addNewAnswerThunkCreator} from '../../redux/reducerTests';


let mapStateToProps=(state)=>{
      return{
        list:state.Tests.list,
      }
}


export default compose(
    connect(mapStateToProps,{setUserChoiseAnswerAC,
      addNewQuestion:addNewQuestionThunkCreator,
      deleteQuestion:deleteQuestionThunkCreator,
      editQuestion:editQuestionThunkCreator,
      editAnswer:editAnswerThunkCreator,
      deleteAnswer:deleteAnswerThunkCreator,
      addNewAnswer:addNewAnswerThunkCreator}),
  //  withAuthRedirect
  )
  (TestPage);
