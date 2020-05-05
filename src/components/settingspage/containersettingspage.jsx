import {addMenuItemAC} from '../../redux/reducerMenuItem';
import Settings from './settingspage';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withAuthRedirect} from '../../common/myhocs';

let mapStateToProps=(state)=>{
  return{
      MenuItems:state.MenuItems
  }
}

export default compose
  (connect(mapStateToProps,{addMenuItemAC}),
   withAuthRedirect)
  (Settings);
