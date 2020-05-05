import React from 'react';
import ChannelList from './ChannelList';
import {updateChannelsThunkCreator} from '../../redux/reducerTV';
import {connect} from 'react-redux'
import {compose} from 'redux';
import {withAuthRedirect} from '../../common/myhocs';

class ContainerChannelList extends React.Component{

componentDidMount(){
  debugger;
  this.props.updateChannelsThunkCreator();
  localStorage.setItem('name','tests');
}

render(){
    return <dev><ChannelList {...this.props} /></dev>
}
}

let mapStateToProps=(state)=>{
  return{channels:state.tv.channels};
}

export default compose
  (connect(mapStateToProps,{updateChannelsThunkCreator}),
//   withAuthRedirect
)
   (ContainerChannelList);
