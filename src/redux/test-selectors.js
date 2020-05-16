export const getCurrentEditTestParamSEL=(state)=>{
  if(state.TestsEdit.testslistforedit){
  let id=state.TestsEdit.idTestEdit;
  let curTest=state.TestsEdit.testslistforedit.filter(t=>t.id===id);
  return curTest.length===1?curTest[0]:null;
} else return null;
}

export const getCurrentEditTestSEL=(state)=>{
  if(state.TestsEdit.testslistforedit){
  let id=state.TestsEdit.idTestEdit;
  return state.TestsEdit.testslistforedit.filter(t=>t.id===id)[0];
} else return null;
}

export const getCurrentEditQuestionSEL=(state)=>{
  if(state.TestsEdit.listedit&&state.TestsEdit.currentQuestionEdit>-1){
    return state.TestsEdit.listedit[state.TestsEdit.currentQuestionEdit];
  } else return null;
}

export const getTicketEditListSEL=(state)=>{
//  debugger;
if(state.TestsEdit.testslistforedit&&state.TestsEdit.currTestEdit>-1){
  return state.TestsEdit.testslistforedit[state.TestsEdit.currTestEdit].tickets;
} else return null;
}







export const getCurrentTestParamSEL=(state)=>{
  if(state.Tests.testslist){
  let id=state.Tests.idTest;
  let curTest=state.Tests.testslist.filter(t=>t.id===id);
  return curTest.length===1?curTest[0]:null;
} else return null;
}


export const getCurrentTestSEL=(state)=>{
  if(state.Tests.testslist){
  let id=state.Tests.idTest;
  return state.Tests.testslist.filter(t=>t.id===id)[0];
} else return null;
}




export const getTicketListSEL=(state)=>{
//  debugger;
if(state.Tests.testslist&&state.Tests.currTest>-1){
  return state.Tests.testslist[state.Tests.currTest].tickets;
} else return null;
}


export const getCurrentQuestionSEL=(state)=>{
  if(state.Tests.list&&state.Tests.currentQuestion>-1){
    return state.Tests.list[state.Tests.currentQuestion];
  } else return null;
}

export const getTestResultSEL=(state)=>{
    return state.Tests.testresult;
}

export const getCurrentAnswerSEL=(state)=>{
  if(state.Tests.list&&state.Tests.currentQuestion>-1){
     if (state.Tests.currentAnswer>-1) return state.Tests.list[state.Tests.currentQuestion].ans[state.Tests.currentAnswer];
  } else return null;
}
