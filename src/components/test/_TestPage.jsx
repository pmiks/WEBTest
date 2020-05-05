import React from 'react';
import QuestionItem from './QuestionItem';


class TestPage extends React.Component{

  state={
    currentQuestions:this.props.currentQuestions,
    selectedItem:-1,
    editMode:false,
    currentTextQuestions:this.props.question
  }

onEditMode=(e)=>{
  this.setState({editMode:true});
}

offEditMode=()=>{
  this.setState({editMode:false});
}




render(){
  let num=0;
  return <div className="Page">
      {!this.state.editMode&&<button onClick={this.onEditMode}>Редактировать</button>}
      {this.state.editMode&& <button onClick={this.offEditMode}>Сохранить</button>}
      {this.state.editMode&& <button onClick={()=>{this.props.addNewQuestion()}}>Добавить вопрос</button>}
      {this.props.list
               .map((item)=><QuestionItem
                        editMode={this.state.editMode}
                        idQuest={num++}
                        question={item}
                        setUserChoiseAnswerAC={this.props.setUserChoiseAnswerAC}
                        editAnswer={this.props.editAnswer}
                        deleteAnswer={this.props.deleteAnswer}
                        addNewAnswer={this.props.addNewAnswer}
                        editQuestion={this.props.editQuestion}
                        deleteQuestion={this.props.deleteQuestion}
                        />)}
      </div>
}
}




export default TestPage;
