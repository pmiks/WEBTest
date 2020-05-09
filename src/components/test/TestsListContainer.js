import TestsList from './TestsList';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {selectTestThunkCreator,editModeONAC,showTicketListAC} from '../../redux/reducerTests2';


const mapStateToProps=(state)=>{
  return {
    testslist:state.Tests.testslist,
    editMode:state.Tests.editMode,
    isAuth:state.me.isAuth,
    idTest:state.Tests.idTest,
  }
}

export default compose (
    connect(mapStateToProps,{
      selectTest:selectTestThunkCreator,
      editModeON:editModeONAC,
      showTicketList:showTicketListAC
    })
)
(TestsList)
