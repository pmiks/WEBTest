import TestsList from './mainpage';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {selectTestThunkCreator,onEditModeAC,showTicketListAC} from '../../redux/reducerTests2';


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
      onEditMode:onEditModeAC,
      showTicketList:showTicketListAC
    })
)
(TestsList)
