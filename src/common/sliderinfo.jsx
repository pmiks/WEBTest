import React from 'react';
import {connect} from 'react-redux';
import './slider.css';
import {compose} from 'redux';
import {nextSlideAC,prevSlideAC,addSlideAC,removeSlideAC} from '../redux/reducerSlider';
import {Field,reduxForm} from 'redux-form';



class SliderInfo extends React.Component{

render(){
    return <div>
    <div>{JSON.stringify(this.props.slider)}</div>
    </div>

  }


}


let mapStateToProps=(state)=>{
      return{
        slider:state.slider,
      }
}


export default compose(
    connect(mapStateToProps,{}),
  )
  (SliderInfo);
