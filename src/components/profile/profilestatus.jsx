import React from 'react';

class ProfileStatus extends React.Component{
statusInputRef=React.createRef;
state={
  editMode:false,
  status:this.props.status
}

activateEditMode=()=>{
  this.setState({editMode:true});
}

deactivateEditMode=()=>{
  this.setState({editMode:false});
  this.props.updateProfileStatusThunkCreator(this.state.status);
}

onStatusChange=(e)=>{
  this.setState({status:e.currentTarget.value});
}

componentDidUpdate(pProps,pState){
      if (pProps.status!==this.props.status) this.setState({status:this.props.status});
}

render(){
  return <div>Статус:
    {!this.state.editMode?
      <div onDoubleClick={this.activateEditMode}><span >{this.props.status||'---'}</span></div>:
      <div><input value={this.state.status} ref={this.statusInputRef} autoFocus={true}
          onChange={this.onStatusChange}
          onBlur={this.deactivateEditMode} /></div>
    }
   </div>;

 }
}

export default ProfileStatus;
