import TestsList from './mainpage';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {selectTest_TC,
        getTestsList_TC
//        ,showTicketList_AC
      } from '../../redux/reducerTests2';

const mapStateToProps=(state)=>{
  return {
    testslist:state.Tests.testslist,
//    editMode:state.Tests.editMode,
    isAuth:state.me.isAuth,
    idTest:state.Tests.idTest,
  }
}

export default compose (
    connect(mapStateToProps,{
      selectTest:selectTest_TC,
      getTestsList:getTestsList_TC
      //onEditMode:onEditModeAC,
//      showTicketList:showTicketList_AC
    })
)
(TestsList)
