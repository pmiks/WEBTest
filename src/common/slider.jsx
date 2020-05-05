import React from 'react';
import {connect} from 'react-redux';
import './slider.css';
import {compose} from 'redux';
import {nextSlideAC,prevSlideAC,addSlideAC,removeSlideAC} from '../redux/reducerSlider';
import {Field,reduxForm} from 'redux-form';


const NewItem=(props)=>{
return     <form onSubmit={props.handleSubmit}>
    <button>+</button>
    <Field component="Input" name="pathImg" placeholder="Путь"/>
    <Field component="Input" name="url" placeholder="Ссылка"/>
    </form>
}


const NewItemRedux=reduxForm({form:'imgPath'})(NewItem)

const NewItemR=(props)=>{
  const fSubmit=(formData)=>{
      props.add(formData.pathImg,formData.url);
  }

  return <div>
      <NewItemRedux onSubmit={fSubmit}/>
  </div>
}


class Slider extends React.Component{

render(){


const createMarkup=()=>{ return {__html: 'First &middot; Second'}; };


    return <div><div className="sliderbox">
    <div className="slider1">
    <img src={this.props.item[this.props.currentItem].img}/>
    {this.props.prevActive && <div onClick={this.props.prev} id="leftarrow">&#8249;</div>}
    {this.props.nextActive && <div onClick={this.props.next} id="rightarrow">&#8250;</div>}
    </div>
    <div>
    <NewItemR add={this.props.add}/>
    <button onClick={()=>{this.props.remove(this.props.currentItem)}}>{this.props.currentItem} &times;</button>
    <button onClick={this.props.prev}>Назад</button>
    <button onClick={this.props.next}>Вперед</button>
    <a target="_blank" href={this.props.item[this.props.currentItem].url}>Ссылка</a>
    </div>
    </div>
    {/*<div>{JSON.stringify(this.props.slider)}</div>*/}
    </div>
  }

    componentDidMount(){
//      this.props.add('https://img1.xuk.life/images/photos/00/04/19/41/41941/origin/eb6fa8a9b1a9bc2a85c5a19db98172da.jpg');
//      this.props.add('https://img1.xuk.life/images/photos/00/03/96/68/39668/origin/257d06bc4f067e78cd0cf3146184e2d5.jpg');
//      this.props.add('https://xyya.net/uploads/posts/2019-10/thumbs/1571922882_24101903-9.jpg','https://xyya.net/ero/155719-suzanna-a-autumn-hay-96-foto.html');
        // this.props.add('https://avatars.mds.yandex.net/get-pdb/1811947/2c720f49-2e73-40ec-a6be-09060edd60b2/s1200?webp=false');
        // this.props.add('https://avatars.mds.yandex.net/get-pdb/2362063/f4a187fa-5c55-47d8-b623-5d517b748df2/s1200?webp=false');

    }

}


let mapStateToProps=(state)=>{
      return{
        slider:state.slider,
        item:state.slider.item,
        currentItem:state.slider.currentItem,
        prevActive:state.slider.prevActive,
        nextActive:state.slider.nextActive
      }
}


export default compose(
    connect(mapStateToProps,{next:nextSlideAC,prev:prevSlideAC,add:addSlideAC,remove:removeSlideAC}),
  )
  (Slider);
