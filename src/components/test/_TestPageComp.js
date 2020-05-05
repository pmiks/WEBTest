import React from "react";
import TestQuestion from '../test/ConatainerQuestion';



class TestPage extends React.Component{
state={
  editMode:false,
  idQuest:0
}

onEditMode=()=>{
this.setState({editMode:true});
}

offEditMode=()=>{
this.setState({editMode:false});
}

onPrev=()=>{
let id=this.state.idQuest-1;
this.setState({idQuest:id});
}

onNext=()=>{
let id=this.state.idQuest+1;
this.setState({idQuest:id});
}

render(){
  return <div className="page">
      {!this.state.editMode&&<button onClick={this.onEditMode}>Редактировать</button>}
      {this.state.editMode&& <button onClick={this.offEditMode}>Сохранить</button>}
      {this.state.editMode&& <button>Добавить вопрос</button>}
            <TestQuestion editMode={this.state.editMode}
                          idQuest={this.state.idQuest}
                          onNext={this.onNext}
                          onPrev={this.onPrev}/>
        </div>;
}
}

export default TestPage;
