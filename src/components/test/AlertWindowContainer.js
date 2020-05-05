import AlertWindow from './AlertWindow';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {showAlertWindowAC} from '../../redux/reducerTests2';


const mapStateToProps=(state)=>{
  return {
    showWindow:state.Tests.flugShowAlertWindow,
    message:state.Tests.messageAlertWindow,
    error:state.Tests.errorAlertWindow
  }
}

export default compose (
    connect(mapStateToProps,{
     showAlertWindow:showAlertWindowAC,
    })
)
(AlertWindow)
