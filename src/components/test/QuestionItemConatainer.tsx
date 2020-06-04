import React, { Component } from 'react';
import QuestionItem from './QuestionItem';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getCurrentQuestionSEL,getCurrentTestParamSEL} from '../../redux/test-selectors';
import {setUserChoiseAnswer_TC,
//        prevQuestionAC,
//        nextQuestion_AC,
//        testIsDone_AC,
        checkChoise_AC,
        onInputAnswer_TC
      } from '../../redux/reducerTests2';
import {withAuthRedirect,withPreloader} from '../../common/myhocs';
import { AppStateType } from '../../redux/redux-store';
import { IQuestion, ITest } from '../../redux/interface';
import {GLOBAL_PATH_API} from '../../Global'

type TypeStateProps={
  tp:ITest|null
  question:IQuestion|null
}

type TypeDispatchProps={
  onInputAnswer:(data:string|null,send?:boolean)=>void
  setUserChoiseAnswer:(qid:number,aid:number)=>void
  chkChoise:()=>void
}

type TypeProps={}


type TQuestionItem={
  question:IQuestion|null
  tp:ITest|null
  onInputAnswer:(data:string|null,send?:boolean)=>void
}


class Question extends React.Component<TQuestionItem&TypeDispatchProps>{

  constructor(props:TQuestionItem&TypeDispatchProps) {
    super(props);
  }

 onSelectState=(qid:number,aid:number)=>{
    this.props.setUserChoiseAnswer(qid,aid)
    // if (this.props.tp&&this.props.tp.type_levelgame) {
    //     this.props.chkChoise();
    // }
 }

render(){
      return <div> <QuestionItem checkChoise={this.onSelectState} {...this.props} /></div>
  }

}

let mapStateToProps=(state:AppStateType):TypeStateProps=>{
      return{
        tp:getCurrentTestParamSEL(state),
        question:getCurrentQuestionSEL(state),
      }
}


export default compose(
    connect<TypeStateProps,TypeDispatchProps,TypeProps,AppStateType>(mapStateToProps,{
      onInputAnswer:onInputAnswer_TC,
      setUserChoiseAnswer:setUserChoiseAnswer_TC,
      chkChoise:checkChoise_AC
    }),
  //  withAuthRedirect,
//  withPreloader
  )
  (Question);
