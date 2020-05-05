import MainMenu from './MainMenu';
import {connect} from 'react-redux';


let mapStateToProps=(state)=>{
  return{
      MenuItems:state.MenuItems,
//      className:this.props.className
  }
}

const ContainerMainMenu=connect(mapStateToProps,{})(MainMenu);

export default ContainerMainMenu;
