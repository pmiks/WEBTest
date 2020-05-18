import {initState} from './init/initTest.js'
import {testAPI} from '../api/api';
import {idRandom,shuffle,uniqueArray} from '../common/functions';

const USER_CHOISE_ANSWER="USER_CHOISE_ANSWER";
const LOAD_TEST="LOAD_TEST";
const SAVE_TEST="SAVE_TEST";

const SET_CURRENT_QUESTION='SET_CURRENT_QUESTION';
const SET_CURRENT_ANSWER='SET_CURRENT_ANSWER';

const SET_CURRENT_EDIT_QUESTION='SET_CURRENT_EDIT_QUESTION';
const SET_CURRENT_EDIT_ANSWER='SET_CURRENT_EDIT_ANSWER';

const SET_CURRENT_TEST_ID='SET_CURRENT_TEST_ID';
const SET_CURRENT_EDIT_TEST_ID='SET_CURRENT_EDIT_TEST_ID';

const ADD_NEW_QUESTION='ADD_NEW_QUESTION';
const DELETE_QUESTION='DELETE_QUESTION';
const EDIT_QUESTION='EDIT_QUESTION';

const ADD_NEW_ANSWER='ADD_NEW_ANSWER';
const DELETE_ANSWER='DELETE_ANSWER';
const EDIT_ANSWER='EDIT_ANSWER';

const CHECK_CHOICE='CHECK_CHOICE';

const TOGGLE_IS_SINCHRONIZING='TOGGLE_IS_SINCHRONIZING';

const NEXT_QUESTION='NEXT_QUESTION';
const PREV_QUESTION='PREV_QUESTION';

const NEXT_EDIT_QUESTION='NEXT_EDIT_QUESTION';
const PREV_EDIT_QUESTION='PREV_EDIT_QUESTION';


const EDIT_MODE_ON='EDIT_MODE_ON';
const OFF_EDIT_MODE='OFF_EDIT_MODE';
const GET_QUESTION='GET_QUESTION';
const GET_TESTS_LIST='GET_TESTS_LIST';

const SELECT_TEST='SELECT_TEST';

const SET_QUESTION_IMAGE='SET_QUESTION_IMAGE';
const SET_ANSWER_IMAGE='SET_ANSWER_IMAGE';
const TEST_RESULT='TEST_RESULT';
const TEST_IS_DONE='TEST_IS_DONE';

export const setCurrentQuestionAC=(id)=>({type:SET_CURRENT_QUESTION,id:id});
export const setCurrentAnswerAC=(id)=>({type:SET_CURRENT_ANSWER,id:id});

// export const setCurrentEditQuestionAC=(id)=>({type:SET_CURRENT_EDIT_QUESTION,id:id});
// export const setCurrentEditAnswerAC=(id)=>({type:SET_CURRENT_EDIT_ANSWER,id:id});
export const setCurrentTestIdAC=(id)=>({type:SET_CURRENT_TEST_ID,id:id});
// export const setCurrentEditTestIdAC=(id)=>({type:SET_CURRENT_EDIT_TEST_ID,id:id});

// export const addNewQuestionAC=(id,text,img=null)=>({type:ADD_NEW_QUESTION,id:id,text:text,img:img});
// export const deleteQuestionAC=()=>({type:DELETE_QUESTION});
// export const editQuestionAC=(text='Вопрос',img=null,comment=null,istextanswer=null,textanswer=null,addalter=null)=>
//     ({type:EDIT_QUESTION,text:text,img:img,comment:comment,istextanswer:istextanswer,textanswer:textanswer,addalter:addalter});

// export const addNewAnswerAC=(id,text='Вариант',img=null,isTrue=false)=>({type:ADD_NEW_ANSWER,id:id,text:text,img:img,isTrue:isTrue});
// export const deleteAnswerAC=(id)=>({type:DELETE_ANSWER,id:id});
// export const editAnswerAC=(text=null,img=null,isTrue=false)=>({type:EDIT_ANSWER,text:text,img:img,isTrue:isTrue});

export const setUserChoiseAnswerAC=()=>({type:USER_CHOISE_ANSWER});
export const loadTestAC=(data)=>({type:LOAD_TEST,data:data});
// const LOAD_TEST_EDIT="LOAD_TEST_EDIT";
// export const loadTestEditAC=(data)=>({type:LOAD_TEST_EDIT,data:data});
// const DELETE_TEST="DELETE_TEST";
// export const deleteTestAC=(id)=>({type:DELETE_TEST,id:id});

// const ADD_NEW_TEST="ADD_NEW_TEST";
// export const addTestAC=(data)=>({type:ADD_NEW_TEST,data:data});
export const getTestsListAC=(data)=>({type:GET_TESTS_LIST,data:data});
// const GET_TESTS_LIST_FOR_EDIT="GET_TESTS_LIST_FOR_EDIT";
// export const getTestsListForEditAC=(data)=>({type:GET_TESTS_LIST_FOR_EDIT,data:data});


export const getQuestionAC=(data)=>({type:GET_QUESTION,data:data});

//export const saveTestAC=()=>({type:SAVE_TEST});

export const checkChoiseAC=()=>({type:CHECK_CHOICE});

export const _nextQuestionAC=()=>({type:NEXT_QUESTION});
export const prevQuestionAC=()=>({type:PREV_QUESTION});

// export const nextEditQuestionAC=()=>({type:NEXT_EDIT_QUESTION});
// export const prevEditQuestionAC=()=>({type:PREV_EDIT_QUESTION});


// export const editModeONAC=()=>({type:EDIT_MODE_ON});
// export const offEditModeAC=()=>({type:OFF_EDIT_MODE});

export const toggleIsSynchroAC=(isSynchro)=>({type:TOGGLE_IS_SINCHRONIZING,isSynchro:isSynchro});

export const selectTestAC=(testid)=>({type:SELECT_TEST,testid:testid});
// const SELECT_EDIT_TEST='SELECT_TEST';
// export const selectTestEditAC=(testid)=>({type:SELECT_EDIT_TEST,testid:testid});

// export const setQImgAC=(filename)=>({type:SET_QUESTION_IMAGE,filename:filename});
// export const setAImgAC=(filename)=>({type:SET_ANSWER_IMAGE,filename:filename});

export const testIsDoneAC=(isDone=true)=>({type:TEST_IS_DONE,isDone:isDone});

const SHOW_TICKET='SHOW_TICKET';
export const showTicketListAC=()=>({type:SHOW_TICKET});


// const ADD_QUESTION_TO_TICKET='ADD_QUESTION_TO_TICKET';
// export const addQuestionToTicketAC=(add,id)=>({type:ADD_QUESTION_TO_TICKET,add:add,id:id});

// const ADD_TICKET='ADD_TICKET';
// export const addTicketAC=(name="ticket")=>({type:ADD_TICKET,name:name});

// const DELETE_TICKET='DELETE_TICKET';
// export const deleteTicketAC=(id)=>({type:DELETE_TICKET,id:id});

// const EDIT_TICKET='EDIT_TICKET';
// export const editTicketAC=(id,name)=>({type:EDIT_TICKET,id:id,name:name});

// const SET_TEST_PARAM='SET_TEST_PARAM';
// export const setTestParamAC=(data)=>({type:SET_TEST_PARAM,data:data});

 const SET_TICKET_TEST='SET_TICKET_TEST';
 export const setTicketTestAC=(id)=>({type:SET_TICKET_TEST,id:id});

// const UNLOAD_FLUG_ON='UNLOAD_FLUG_ON';
// export const unloadFlugON=()=>({type:UNLOAD_FLUG_ON});
//
// const UNLOAD_TEST='UNLOAD_TEST';
// export const unloadTestAC=()=>({type:UNLOAD_TEST});

const ON_INPUT_ANSWER='ON_INPUT_ANSWER';
export const onInputAnswerAC=(data=null,send=false)=>({type:ON_INPUT_ANSWER,data:data,send:send});

const SEND_STAT='SEND_STAT';
export const sendStatAC=(data)=>({type:SEND_STAT,data:data});

const CHECK_TEST='CHECK_TEST';
export const checkTestAC=()=>({type:CHECK_TEST});

// const PUBLICATE_TEST='PUBLICATE_TEST';
// export const publicateAC=()=>({type:PUBLICATE_TEST});

const SHOW_ALERT_WINDOW='SHOW_ALERT_WINDOW';
export const showAlertWindowAC=(show=false)=>({type:SHOW_ALERT_WINDOW,show:show});

const SET_ALL_ANSWERS='SET_ALL_ANSWERS';
export const setAllAnswers=(data)=>({type:SET_ALL_ANSWERS,data:data});

// const SET_TEST_COVER_IMG='SET_TEST_COVER_IMG';
// export const setTestCoverImageAC=(img)=>({type:SET_TEST_COVER_IMG,img:img});

const ADD_USER_RESULT_QUESTION='ADD_USER_RESULT_QUESTION';
export const addUResultQAC=()=>({type:ADD_USER_RESULT_QUESTION});

const GET_TEST_RESULT='GET_TEST_RESULT';
export const getTestResultAC=(tr)=>({type:GET_TEST_RESULT,tr:tr});

const GET_ALL_TEST_RESULT='GET_ALL_TEST_RESULT';
export const getAllTestResultAC=(atr)=>({type:GET_ALL_TEST_RESULT,atr:atr});

const DELETE_TEST_RESULT='DELETE_TEST_RESULT';
export const deleteUserResultAC=(session)=>({type:DELETE_TEST_RESULT,session:session});

const GET_RESULT='GET_RESULT';
export const getResultAC=(data)=>({type:GET_RESULT,data:data});


// export const publicateTC=()=>{
//   return (dispatch)=>{
//     dispatch(checkTestAC());
//     dispatch(publicateAC());
//     }
// }



export const selectTestThunkCreator=(idTest)=>{
return (dispatch)=>{
dispatch(toggleIsSynchroAC(true));
testAPI.getTestsList()
.then(data=>{
  if (data.status===200)
//    dispatch(getTestsListAC(data.data));
    dispatch(selectTestAC(idTest));
    dispatch(loadTestThunkCreator(idTest));
  })
    .finally(()=>{dispatch(toggleIsSynchroAC(false));});
  }
}


export const getResultTC=(idtest)=>
async (dispatch)=>{
//      console.log("------------------------------------"+idtest);
    dispatch(toggleIsSynchroAC(true));
    let response = await testAPI.getResult(idtest);
      if (response.status===200)   dispatch(getResultAC(response.data));
      dispatch(toggleIsSynchroAC(false));
}


// export const saveTestCoverImgTC=(idT,file)=>
// async (dispatch)=>{
//   dispatch(toggleIsSynchroAC(true));
//   let response = await testAPI.saveTestCoverImg(idT,file)
//   if (response.status===200) { dispatch(setTestCoverImageAC(response.data.filename)); }
//       dispatch(toggleIsSynchroAC(false));
// }




// export const selectTestEditTC=(idTest)=>{
// return (dispatch)=>{
// dispatch(toggleIsSynchroAC(true));
// testAPI.getTestsListForEdit()
// .then(data=>{
//   if (data.status===200)
// //    dispatch(getTestsListForEditAC(data.data));
//     dispatch(selectTestEditAC(idTest));
//     dispatch(loadTestEditTC(idTest));
//   })
//     .finally(()=>{dispatch(toggleIsSynchroAC(false));});
//   }
// }



// export const deleteAnswerPhotoThunkCreator=(idA)=>{
//   return (dispatch)=>{
//     dispatch(toggleIsSynchroAC(true));
//     testAPI.deleteAnswerPhoto(idA)
//         .then(()=>{
//             dispatch(setCurrentEditAnswerAC(idA));
//             dispatch(editAnswerAC(null,""));
//           })
//         .finally(()=>{dispatch(toggleIsSynchroAC(false));});
//     }
// }
//
// export const deleteQuestionPhotoThunkCreator=(idQ)=>{
//   return (dispatch)=>{
//     dispatch(toggleIsSynchroAC(true));
//     testAPI.deleteQuestionPhoto(idQ)
//         .then(()=>{
//             dispatch(setCurrentEditQuestionAC(idQ));
//             dispatch(editQuestionAC(null,""));
//           })
//         .finally(()=>{dispatch(toggleIsSynchroAC(false));});
//   }
// }

export const nextQuestionTC=(idQ)=>{
return (dispatch)=>{
     dispatch(_nextQuestionAC())
}
}

export const onInputAnswerTC=(data=null,send=false)=>{
  return (dispatch)=>{
      dispatch(onInputAnswerAC(data,send));
      dispatch(checkChoiseAC());
      if (send) {
        dispatch(setCurrentAnswerAC(-1));
        dispatch(sendStatAC());
        dispatch(addUResultQAC());
      }

  }
}


// export const saveTestCoverImgTC=(idT,file)=>
// async (dispatch)=>{
//   dispatch(toggleIsSynchroAC(true));
//   let response = await testAPI.saveTestCoverImg(idT,file)
//   if (response.status===200) { dispatch(setTestCoverImageAC(response.data.filename)); }
//       dispatch(toggleIsSynchroAC(false));
// }
//
// export const deleteTestCoverImgTC=(idT)=>{
//   return (dispatch)=>{
//     dispatch(toggleIsSynchroAC(true));
//     testAPI.deleteTestCoverImg(idT)
//         .then(()=>{ dispatch(setTestCoverImageAC("")); })
//         .finally(()=>{dispatch(toggleIsSynchroAC(false));});
//   }
// }
//


// export const saveAnswerPhotoThunkCreator=(idA,file)=>
// async (dispatch)=>{
//   dispatch(toggleIsSynchroAC(true));
//   let response = await testAPI.saveAnswerPhoto(idA,file)
//   if (response.status===200) {
//     dispatch(setCurrentEditAnswerAC(idA));
//     dispatch(setAImgAC(response.data.filename));
//     }
//       dispatch(toggleIsSynchroAC(false));
// }
//
// export const saveQuestionPhotoThunkCreator=(idQ,file)=>
// async (dispatch)=>{
//   dispatch(toggleIsSynchroAC(true));
//   let response = await testAPI.saveQuestionPhoto(idQ,file)
//   if (response.status===200) dispatch(setQImgAC(response.data.filename));
//       dispatch(toggleIsSynchroAC(false));
// }



export const getTestsListThunkCreator=(id=0)=>{
return (dispatch)=>{
  dispatch(toggleIsSynchroAC(true));
  testAPI.getTestsList(id)
  .then(data=>{
    if (data.status===200)
      dispatch(getTestsListAC(data.data));
      dispatch(toggleIsSynchroAC(false));
    });
  }
}





export const deleteUserResultTC=(session)=>{
return (dispatch)=>{
  if (window.confirm("Вы уверены что хотите удалить результат теста?!")){
    dispatch(toggleIsSynchroAC(true));
     testAPI.deleteUserResult(session)
     .then(response=>{
       if (response.status===200)
        dispatch(deleteUserResultAC(session));
        dispatch(toggleIsSynchroAC(false));
       });
    }
}
}


// export const deleteTestTC=(id)=>{
// return (dispatch)=>{
//   if (window.confirm("Вы уверены что хотите удалить тест?!")){
//     dispatch(toggleIsSynchroAC(true));
//     testAPI.deleteTest(id)
//     .then(response=>{
//       if (response.status===200)
//         dispatch(deleteTestAC(id));
//         dispatch(toggleIsSynchroAC(false));
//       });
//     }
// }
// }


// export const addTestTC=()=>{
// return (dispatch)=>{
//     dispatch(toggleIsSynchroAC(true));
//     testAPI.addTest({testname:"Новый тест",hashtag:"#new"})
//     .then(response=>{
//       if (response.status===200)
//         debugger
//         dispatch(addTestAC(response.data[0]));
//         dispatch(toggleIsSynchroAC(false));
//         console.log(response.data[0].id);
//       });
// }
// }
//
//
// export const getTestsListForEditTC=(id=0)=>{
// return (dispatch)=>{
//   dispatch(toggleIsSynchroAC(true));
//   testAPI.getTestsListForEdit(id)
//   .then(response=>{
//     if (response.status===200)
//       dispatch(getTestsListForEditAC(response.data));
//       dispatch(toggleIsSynchroAC(false));
//     });
//   }
// }
//
//
//
//
// // export const loadTestThunkCreator=(id=0)=>{
// // return (dispatch)=>{
// //   dispatch(toggleIsSynchroAC(true));
// //   testAPI.sendStat({testid:id});
// //   testAPI.loadTest(id)
// //   .then(data=>{
// //     if (data.status===200)
// //       dispatch(testIsDoneAC(false));
// //       dispatch(loadTestAC(data.data));
// // //      dispatch(toggleIsSynchroAC(false));
// //   })
// //   .then(()=>{
// //       testAPI.getAllAnswers(id)
// //        .then(data=>{
// //           debugger;
// //           if (data.status===200)
// //           dispatch(setAllAnswers(data.data));
// //         })
// //
// //     })
// //   .finally(()=>{dispatch(toggleIsSynchroAC(false));});
// //   }
// // }




export const getTestResultTC=(session)=>{
return (dispatch)=>{
  dispatch(toggleIsSynchroAC(true));
  testAPI.gettestresult(session)
     .then(data=>{
          if (data.status===200)
          dispatch(getTestResultAC(data.data));
      })
  .finally(()=>{dispatch(toggleIsSynchroAC(false));});
  }
}


export const getAllTestResultTC=(session)=>{
return (dispatch)=>{
  dispatch(toggleIsSynchroAC(true));
  testAPI.getAllTestResult()
     .then(response=>{
          if (response.status===200)
          dispatch(getAllTestResultAC(response.data));
      })
  .finally(()=>{dispatch(toggleIsSynchroAC(false));});
  }
}



export const loadTestThunkCreator=(id=0)=>{
return (dispatch)=>{
  dispatch(toggleIsSynchroAC(true));
  testAPI.sendStat({testid:id});

  testAPI.getAllAnswers(id)
     .then(data=>{
          if (data.status===200)
          dispatch(setAllAnswers(data.data));
      })
      .then(()=>{
            testAPI.loadTest(id)
            .then(data=>{
              if (data.status===200)
                dispatch(testIsDoneAC(false));
                dispatch(loadTestAC(data.data));
            })
      })
  .finally(()=>{dispatch(toggleIsSynchroAC(false));});
  }
}


// export const loadTestEditTC=(id=0)=>{
// return (dispatch)=>{
//   dispatch(toggleIsSynchroAC(true));
//             testAPI.loadTest(id)
//             .then(data=>{
//               if (data.status===200)
//                 dispatch(loadTestEditAC(data.data));
//             })
//   .finally(()=>{dispatch(toggleIsSynchroAC(false));});
//   }
// }
//
//
// // export const loadQuestionThunkCreator=(id=-1)=>{
// // return (dispatch)=>{
// //   dispatch(toggleIsSynchroAC(true));
// //   testAPI.getQuestion(id)
// //   .then(data=>
// //     {
// //     if (data.status===200)
// //       dispatch(getQuestionAC(data.data));
// //       dispatch(toggleIsSynchroAC(false));
// //     });
// //   }
// // }

export const setUserChoiseAnswerThunkCreator=(idQ,idA)=>{
return (dispatch)=>{
  dispatch(setCurrentQuestionAC(idQ));
  dispatch(setCurrentAnswerAC(idA));
  dispatch(setUserChoiseAnswerAC());
  dispatch(checkChoiseAC());
  dispatch(sendStatAC());
  dispatch(addUResultQAC());
  }
}

// export const addNewQuestionThunkCreator=(idtest,text='Новый вопрос',img=null,multichoise=false)=>{
// return (dispatch)=>{
//             dispatch(addNewQuestionAC(idRandom(),text,img,multichoise));
//   }
// }

export const sendUResultQTC=(idtest,text='Новый вопрос',img=null,multichoise=false)=>{
return (dispatch)=>{
            dispatch(addUResultQAC());
  }
}


// export const deleteQuestionThunkCreator=(id=-1)=>{
// return (dispatch)=>{
//   dispatch(toggleIsSynchroAC(true));
//   testAPI.deleteQuestion(id)
//   .then(response=>
//       {
//         if (response.status===200){
//             dispatch(setCurrentEditQuestionAC(id));
//             dispatch(deleteQuestionAC());
//             dispatch(toggleIsSynchroAC(false));
//         }
//     });
//   }
// }

// export const editQuestionThunkCreator=(id,text=null,img=null,comment=null,istextanswer=null,textanswer=null,addalter=null)=>{
// return (dispatch)=>{
//       dispatch(setCurrentEditQuestionAC(id));
//       dispatch(editQuestionAC(text,img,comment,istextanswer,textanswer,addalter));
//   }
// }
//
// export const editAnswerThunkCreator=(idQ,idA,text=null,img=null,truth=null)=>{
// return (dispatch)=>{
//       debugger;
//       dispatch(setCurrentEditQuestionAC(idQ));
//       dispatch(setCurrentEditAnswerAC(idA));
//       dispatch(editAnswerAC(text,img,truth));
//   }
//  }
//



// const SET_NEW_ID_QUESTION='SET_NEW_ID_QUESTION';
// export const setNewIdQuestionAC=(idQOld,idQNew)=>({type:SET_NEW_ID_QUESTION,idQOld:idQOld,idQNew:idQNew})
// const SET_NEW_ID_ANSWER='SET_NEW_ID_ANSWER';
// export const setNewIdAnswerAC=(idQ,idAOld,idANew)=>({type:SET_NEW_ID_ANSWER,idQ:idQ,idAOld:idAOld,idANew:idANew})
// const SET_AS_SAVED='SET_AS_SAVED';
// export const setAsSavedAC=(idQ)=>({type:SET_AS_SAVED,idQ:idQ})
// const SET_NEW_TICKET_ID='SET_NEW_TICKET_ID';
// export const setNewIdTiket=(idTest,idTikOld,idTikNew)=>({type:SET_NEW_TICKET_ID,idTest:idTest,idTikOld:idTikOld,idTikNew:idTikNew})

// export const saveAllTC=(data,testParam)=>{
// return (dispatch)=>{
// let resultQ=[];
// let res=[];
// let itarationAnswer=(idQ,quest)=>{
// console.log("itarationAnswer idQ:",idQ);
//           quest.ans.forEach((itemA,i)=>{
//             if (itemA.deleted) {res.push(testAPI.deleteAnswer(itemA.id)); console.log("Пытаюсь удалить ",itemA.id);}
//              else{ if(itemA.added) res.push(testAPI.addAnswer(idQ,itemA).then(responseA=>{
//                   if (responseA.status===201) //itemA.id=responseA.data.id
//                     dispatch(setNewIdAnswerAC(idQ,itemA.id,responseA.data.id));
//                   })
//                 );
//                else {if(itemA.edited) res.push(testAPI.editAnswer(itemA.id,{...itemA,idquestion:idQ}));
//              }
//              }
//           });
//     return Promise.all(res).then(()=>{
//     dispatch(setAsSavedAC(idQ))});
// }
// // Сохранение вопросов
//     dispatch(toggleIsSynchroAC(true));
//     let copyTP=JSON.parse(JSON.stringify(testParam));
//     console.log("Start saving with data:",data);
//     data.forEach((itemQ, i) => {
//           let resQ=null;
//           console.log("Iterate itemQ:",itemQ);
//           if (itemQ.deleted) resQ=testAPI.deleteQuestion(itemQ.id);
//           else {
//             if (itemQ.added) resQ=testAPI.addQuestion(itemQ)
//                         .then (response=>{
//                              if (response.status===201) {//item.id=response.data.id
//                              dispatch(setNewIdQuestionAC(itemQ.id,response.data.id));
//                              copyTP=replaceNumQuestionInTicket(copyTP,itemQ.id,response.data.id)
//                              return response.data.id}
//                           });
//               else {if (itemQ.edited) {resQ=testAPI.editQuestion(itemQ.id,itemQ); return itemQ.id}
//               }
//           resultQ.push(resQ);
//           let resA=[];
//           if (resQ) resQ.then((idQ)=>{console.log("Answer with promise");resA=itarationAnswer(idQ,itemQ)})
//           else {console.log("Answer without promise",itemQ.id,itemQ);resA=itarationAnswer(itemQ.id,itemQ)}
//     }});
//
//
//     console.log("copyTP.id,copyTP:",copyTP.id,copyTP);
//     let resTP=testAPI.editTest(copyTP.id,copyTP)
//
//     let itarationTicket=()=>{
//         let resTik=[];
//         console.log("Все промисы param и question завершены");
//         copyTP.tickets.forEach((itemTik, i)=>{
//             if (itemTik.deleted) {resTik=testAPI.deleteTicket(itemTik.id)}
//               else{
//                 if (itemTik.added) {resTik=testAPI.addTicket(itemTik)
//                     .then((responseT)=>{
//                       console.log("Add ticket");
//                       if (responseT.status===201) {//item.id=response.data.id
//                         dispatch(setNewIdTiket(copyTP.id,itemTik.id,responseT.data.id));
//                     }});
//                   }
//                   else{
//                     if (itemTik.edited) {resTik=testAPI.editTicket(itemTik.id,itemTik)}
//                   }
//               }
//         })
//
//     }
//
//     Promise.all(resultQ.concat(resTP).concat(res))
//     .then(itarationTicket)
//     .finally(()=>{
//        dispatch(toggleIsSynchroAC(false));
//      })
//   }
// }
//
// // export const saveThunkCreator=(data)=>{
// // return (dispatch)=>{
// //   dispatch(toggleIsSynchroAC(true));
// //   debugger;
// //   let result=[];
// //   if (data.added) result.push(
// //          testAPI.addQuestion(data.idtest,{question:data.question,multichoise:data.multichoise,img:data.img,num:data.num})
// //                 .then (response=>{if (response.status===201)data.id=response.data.id})
// //               );
// //
// //   else {if (data.edited) result.push(testAPI.editQuestion(data.id,{idtest:data.idtest,question:data.question,multichoise:data.multichoise,img:data.img,num:data.num}));}
// //
// //     Promise.all(result).then(()=>{
// //             let result2=[];
// //             data.ans.map((a,i)=>{
// //               if (a.deleted) result2.push(testAPI.deleteAnswer(a.id));
// //                else{
// //                  if(a.added) result2.push(testAPI.addAnswer(data.id,{anstext:a.anstext,img:a.img}));
// //                  else {if(a.edited) result2.push(testAPI.editAnswer(a.id,{idquestion:data.id,anstext:a.anstext,truth:a.truth,img:a.img,num:a.num}));
// //                }
// //                }
// //             });
// //              Promise.all(result2).then(()=>{
// //                dispatch(offEditModeAC());
// //                dispatch(toggleIsSynchroAC(false));
// //                dispatch(loadQuestionThunkCreator(data.id));
// //              });
// //            })
// //   }
// // }

// export const addNewAnswerThunkCreator=(idQ,text="NA",img=null)=>{
// return (dispatch)=>{
//             dispatch(setCurrentEditQuestionAC(idQ));
//             dispatch(addNewAnswerAC(idRandom(),text,img,false));
//   }
// }
//
// export const deleteAnswerThunkCreator=(idQ=-1,idA=-1)=>{
// return (dispatch)=>{
//             dispatch(setCurrentEditQuestionAC(idQ));
//             dispatch(setCurrentEditAnswerAC(idA));
//             dispatch(deleteAnswerAC());
//   }
// }


const analizeInputAnswer=(answer,rightanswer,upper=true)=>{
  if (!answer) return false
  let ans=(upper?answer.toUpperCase():answer).replace(/\s/g, '');
  let right=(upper?rightanswer.toUpperCase():rightanswer).replace(/\s/g, '');
  let rightArray=right.split("/");
  return rightArray.some(a=>a===ans)
}

// const replaceNumQuestionInTicket=(test,idQOld,idQNew)=>{
//   debugger;
//    return {...test,tickets:test.tickets.map(cT=>({...cT,questions:cT.questions.map(q=>q==idQOld?idQNew:q)}))}
// }

const addAlterAnswer=(test,answer,add=0)=>{
    return test.map(q=>{if (q.addalter==0&&add==0) return q;
         let ansbuff=q.ans;
         let altanswer=answer.map(alt=>({id:idRandom(),img:alt.img,anstext:alt.anstext,uch:false,truth:false}));//
          ansbuff.forEach((item, i) => {
              altanswer=altanswer.filter(a=>(a.anstext+a.img).toUpperCase().replace(/\s/g, '')!=(item.anstext+item.img).toUpperCase().replace(/\s/g, ''))
          });

         return {...q, ans:q.ans.concat(shuffle(altanswer,q.addalter+add+1-q.ans.length))}
       })

}


export const reducerTests=(state=initState,action)=>{
  switch (action.type) {
  case SET_CURRENT_QUESTION:
    return {...state, questionID:action.id,currentQuestion:state.list.findIndex((q,i)=>q.id==action.id)}
  case SET_CURRENT_ANSWER:
    return {...state, answerID:action.id,currentAnswer:state.list[state.currentQuestion].ans.findIndex((q,i)=>q.id==action.id) }

  // case SET_CURRENT_EDIT_QUESTION:
  //   return {...state, questionIDEdit:action.id,currentQuestionEdit:state.listedit.findIndex((q,i)=>q.id==action.id)}
  // case SET_CURRENT_EDIT_ANSWER:
  //     return {...state, answerIDEdit:action.id,currentAnswerEdit:state.listedit[state.currentQuestionEdit].ans.findIndex((q,i)=>q.id==action.id) }

  case TEST_RESULT:
    return{...state,
      testresult:{...state.testresult,
         allIsChecked:!state.list.some(id=>(!id.ans.some(ida=>ida.uch))),
         isDoneTest:false
      }
    }
    case TEST_IS_DONE:
    console.log(action.isDone);
    if (action.isDone) testAPI.testdone(state.sessionID);
      return{...state,
        testresult:{...state.testresult,sessionID:state.sessionID,
                      isDoneTest:action.isDone
                   }
      }

  case CHECK_CHOICE:
    debugger;
    let listnew=state.list.map(q=>({...q,isChecked:q.istextanswer?q.isChecked:q.ans.some(ida=>ida.uch),win:q.istextanswer?q.win:!q.ans.some(a=>a.truth!==a.uch)}))
    return {...state,
          testresult:{...state.testresult,allIsChecked:!listnew.some(a=>!a.isChecked)},
//           allIsChecked:!listnew.some(a=>!a.isChecked),
           list:listnew
       }
  case LOAD_TEST:
    let cT=state.testslist[state.currTest];
    let addAnsw=addAlterAnswer(action.data,state.allAnswers,cT.addalter);
    let shuffleTest=cT.shuffleQuestion?shuffle(addAnsw,cT.limit_quest):addAnsw;
    return {...state,
       list:shuffleTest.map((q,i)=>{
         return{...q,num:i+1,inputAnswer:"",ans:(cT.shuffleAnswer&&!state.editMode?shuffle(q.ans):q.ans).map((a,j)=>{return{...a,score:a.truth?1:(a.score?a.score:0),num:j+1}})}}),
       currentQuestion:shuffleTest.length>0?0:-1,
       questionID:shuffleTest.length>0?shuffleTest[0].id:null,
//questionID:state.list[cQ1].id
       currentAnswer:-1,
       testresult:{...state.testresult,testname:cT.testname,testcover:cT.coverimg,allIsChecked:false}
     }
     // case LOAD_TEST_EDIT:
     //   return {...state,listedit:action.data,
     //      currentQuestionEdit:action.data.length>0?0:-1,
     //      questionIDEdit:action.data.length>0?action.data[0]:null,
     //      currentAnswerEdit:-1,
     //  }

  // case SET_TEST_COVER_IMG:
  //     return {...state,
  //         dataIsChanged:true,
  //         testslistforedit:state.testslistforedit.map((t,i)=>{if (i==state.currTestEdit) return {...t, coverimg:action.img}; return {...t} })
  //         }
  case SELECT_TEST:
      return {...state,
          sessionID:"T"+action.testid+"t"+Date.now()+"r"+Math.abs(idRandom()),
          idTest:action.testid,
          currTest:state.testslist.findIndex((q,i)=>q.id==action.testid),
          testresult:{allIsChecked:false,isDoneTest:false,resquestion:[]}
        }
  // case SELECT_EDIT_TEST:
  //     return {...state,
  //         idTestEdit:action.testid,
  //         currTestEdit:state.testslist.findIndex((q,i)=>q.id==action.testid)
  //         }
  // case ADD_NEW_TEST:
  //     return {...state,
  //         idTestEdit:action.data.id,
  //         testslistforedit:[state.testslistforedit,action.data],
  //       }
  case GET_TESTS_LIST:
       return {...state,
          idTest:-1,
          list:[],
          testslist:[...action.data],
        }
//   case GET_TESTS_LIST_FOR_EDIT:
//              return {...state,
//                 idTestEdit:-1,
//                 listedit:[],
//                 testslistforedit:[...action.data],
//               }
// //   case GET_QUESTION:
// //      return {...state,
// //         list:state.list.map((l,i)=>{if (i===state.currentQuestion) return{...action.data[0],num:i+1,ans:action.data[0].ans.map((a,j)=>{return{...a,num:j+1}})} ; return l;}),
// //      }

//   case ADD_NEW_QUESTION:
//       let answers=[];
//       let numAnsw=(state.testslistforedit[state.currTestEdit].defaultAnswerCol<2)?(2):(state.testslistforedit[state.currTestEdit].defaultAnswerCol*1)+1;
//       for (let i=1;i<numAnsw;i++) answers.push({id:idRandom(),anstext:state.testslistforedit[state.currTestEdit].defaultAnswer,num:i,truth:false,uch:false,added:true})
//       return {...state,
//         dataIsChanged:true,
//         listedit:[...state.listedit,
//                           {id:action.id,
//                            idtest:state.idTestEdit,
//                            num:state.list.length+1,
//                            question:state.testslistforedit[state.currTestEdit].defaultQuestion,
//                            istextanswer:false,
//                            textanswer:"",
//                            img:"",
//                            ans:answers,
//                            added:true
//                          }
//               ],
//         currentQuestionEdit:state.listedit.length,
//         questionIDEdit:action.id
//       }
//   case DELETE_TEST:{
//     return {...state,
// //              dataIsChanged:true,
//               dataIsChanged:true,
//               testslistforedit:state.testslistforedit.filter((q,id)=>id!=action.id),
//               testslist:state.testslist.filter((q,id)=>id!=action.id)
//             }
//   }
//   case DELETE_QUESTION:
//      return {...state,
//                dataIsChanged:true,
//                currentQuestionEdit:state.currentQuestionEdit===state.listedit.length-1?state.currentQuestionEdit-1:state.currentQuestionEdit,
//                listedit:state.listedit.filter((q,id)=>id!=state.currentQuestionEdit)
//              }
//   case SET_QUESTION_IMAGE:
//   return {...state,
//            dataIsChanged:true,
//            listedit:state.listedit.map((q,id)=>{
//                if (id!=state.currentQuestionEdit) return q;
//                           return {...q,
//                                 img:action.filename,
//                                 edited:true
//                               }
//              })
//   }
//   case SET_ANSWER_IMAGE:
//   debugger;
//   return {...state,
//            dataIsChanged:true,
//            listedit:state.listedit.map((q,id)=>{
//                if (id!=state.currentQuestionEdit) return q;
//                           return {...q,
//                                 ans:q.ans.map((a,i)=>{if (i!=state.currentAnswerEdit) return a;return{...a,img:action.filename,edited:true}})
//                               }
//              })
//   }
//   case EDIT_QUESTION:
//    return {...state,
//             dataIsChanged:true,
//             listedit:state.listedit.map((q,id)=>{
//                 if (id!=state.currentQuestionEdit) return q;
//                            return {...q,
//                                  question:action.text!==null?action.text:q.question,
//                                  idtest:state.idTestEdit,
//                                  img:action.img!==null?action.img:q.img,
//                                  comment:action.comment!==null?action.comment:q.comment,
//                                  istextanswer:action.istextanswer!==null?action.istextanswer:q.istextanswer,
//                                  textanswer:action.textanswer!==null?action.textanswer:q.textanswer,
//                                  addalter:action.addalter!==null?action.addalter:q.addalter,
//                                  edited:true
//                                }
//               })
//    }
//   case SET_NEW_ID_QUESTION:
// //    console.log(">>>>>>>Сохранение вопросов");
//     return {...state,
//         listedit:state.listedit.map(q=>q.id==action.idQOld?{...q,id:action.idQNew}:q),
//         testslistforedit:state.testslistforedit.map(tl=>tl.id==state.idTestEdit?replaceNumQuestionInTicket(tl,action.idQOld,action.idQNew):tl)
//      }
//  case SET_NEW_ID_ANSWER:
// //    console.log(">>>>>>>>>Сохранение ответов");
//      return {...state,
//          listedit:state.listedit.map(q=>q.id==action.idQ?{...q,ans:q.ans.map(a=>a.id==action.idAOld?{...a,id:action.idANew}:a)}:q)
//       }
// case SET_NEW_TICKET_ID:
// //   console.log(">>>>>>>>>Сохранение билетов");
// //   debugger;
//     return {...state,
//         testslistforedit:state.testslistforedit.map(tl=>
//             tl.id==action.idTest?
//                 {...tl,tickets:
//                   tl.tickets.map((tik)=>tik.id==action.idTikOld?({...tik,id:action.idTikNew}):tik)
//                 }
//             :tl)
//      }
//
//       case SET_AS_SAVED:
//         return {...state,
//           dataIsChanged:false,
//           listedit:state.listedit.filter(dq=>!dq.deleted).map(q=>q.id==action.idQ?{...q,added:false,edited:false,ans:q.ans.filter(da=>!da.deleted).map(a=>({...a,added:false,edited:false}))}:q)
//         }
//
//
//   case DELETE_ANSWER:
//      if (state.listedit[state.currentQuestionEdit].ans.length<=2) return state;
//      return {...state,
//          dataIsChanged:true,
//          listedit:state.listedit.map((q,id)=>{
//          if (id!=state.currentQuestionEdit) return q; return {question:q.question,id:q.id,
//               ans:q.ans.map((q,id)=>{if (id==state.currentAnswerEdit) {return {...q,deleted:true}};return q})
//             }
//        }),
//        deleted:true
//      }
//   case EDIT_ANSWER:
//   return {...state,
//       dataIsChanged:true,
//       listedit:state.listedit.map((q,id)=>{if (id!=state.currentQuestionEdit) return q; return {...q,question:q.question,id:q.id,
//         ans:q.ans.map((a,ida)=>{
//              if (ida!=state.currentAnswerEdit) return a;
//              return {...a,anstext:action.text===null?a.anstext:action.text
//                ,img:action.img===null?a.img:action.img
//                ,truth:action.isTrue===null?a.truth:action.isTrue
//                ,uch:a.uch,edited:true}})
//       }})
//   }
  case TOGGLE_IS_SINCHRONIZING:
    return {...state,
      isSynchronizing:action.isSynchro}
  case EDIT_MODE_ON: return {...state,editMode:true}
  case OFF_EDIT_MODE:return {...state,editMode:false}
  case NEXT_QUESTION:
    let cQ1=state.currentQuestion==state.list.length-1?state.currentQuestion:state.currentQuestion+1;
    return {...state,
      currentQuestion:cQ1,
      questionID:state.list[cQ1].id
    }

  case PREV_QUESTION:
    let cQ2=state.currentQuestion==0?0:state.currentQuestion-1;
    return {...state,
      currentQuestion:cQ2,
      questionID:state.list[cQ2].id
    }

    // case NEXT_EDIT_QUESTION:
    //   let cQE1=state.currentQuestionEdit==state.list.length-1?state.currentQuestionEdit:state.currentQuestionEdit+1;
    //   return {...state,
    //     currentQuestionEdit:cQE1,
    //     questionIDEdit:state.list[cQE1].id
    //   }
    //
    // case PREV_EDIT_QUESTION:
    //   let cQE2=state.currentQuestionEdit==0?0:state.currentQuestionEdit-1;
    //   return {...state,
    //     currentQuestionEdit:cQE2,
    //     questionIDEdit:state.list[cQE2].id
    //   }

  // case ADD_NEW_ANSWER:
  //   return {...state,
  //     dataIsChanged:true,
  //     listedit:state.listedit.map((q,id)=>{
  //       if (id!=state.currentQuestionEdit) return q; return {...q,question:q.question,id:q.id,
  //            ans:[...q.ans,{id:idRandom(),anstext:state.defaultAnswer,num:q.ans.length+1,truth:action.isTrue,uch:false,added:true}]
  //          }
  //     })
  //   }
  case USER_CHOISE_ANSWER:
    let newState={...state,
    list:state.list.map( (q,i) =>{
      if(state.currentQuestion===i) {
         return {...q,question:q.question,
                   ans:q.ans.map((a,i)=>{if(state.currentAnswer==i){return {...a,uch:true} } if (state.multichoise) {return a} return  {...a,uch:false}  })
                }
          }
         return q })
        };
    return newState

    // case ADD_TICKET:
    //     return {...state,
    //          dataIsChanged:true,
    //          testslistforedit:state.testslistforedit.map((t,i)=>i==state.currTestEdit?{...t,tickets:[...t.tickets,
    //                       {id:idRandom(),idtest:state.idTestEdit,ticketname:action.name+" "+(t.tickets.length+1),questions:[],added:true}]}:t)
    //        }
    // case DELETE_TICKET:
    //     return {...state,
    //          dataIsChanged:true,
    //          testslistedit:state.testslistedit.map((t,i)=>i==state.currTestEdit?{...t,tickets:t.tickets.map(tik=>tik.id==action.id?{...tik,deleted:true}:tik)}:t)
    //        }
    // case EDIT_TICKET:return {...state,
    //           dataIsChanged:true,
    //           testslistedit:state.testslistedit.map((t,i)=>i==state.currTestEdit?{...t,tickets:t.tickets.map(tik=>tik.id==action.id?{...tik,ticketname:action.name,edited:true}:tik)}:t)
    //         }
    // case ADD_QUESTION_TO_TICKET:
    //     let cQ=state.listedit[state.currentQuestionEdit].id;
    //     return {...state,
    //           dataIsChanged:true,
    //           testslistedit:state.testslistedit.map((t,i)=>i==state.currTestEdit?{...t,tickets:t.tickets.map(tik=>tik.id==action.id?
    //             {...tik, questions:action.add?[...tik.questions,cQ]:tik.questions.filter(q=>q!=cQ) ,edited:true}:tik)}:t)
    //         }
    case ON_INPUT_ANSWER:
      return {...state,
          list:state.list.map((q,i)=>i===state.currentQuestion?
                 {...q,isChecked:action.send,win:action.send?analizeInputAnswer(q.inputAnswer,q.textanswer):false,inputAnswer:action.data!=null?action.data:q.inputAnswer}
                 :q)
      }
    case SET_TICKET_TEST:
      debugger;
      let cTik=state.testslist[state.currTest].tickets.findIndex(t=>t.id==action.id)
      return {...state,
//          dataIsChanged:true,
          currentTicket:action.id,
          list:state.list.filter(l=>state.testslist[state.currTest].tickets[cTik].questions.some(t=>t==l.id)),
          testslist:state.testslist.map((t,i)=>i==state.currTest?{...t,tickets:[]}:t)
      }
    case SEND_STAT:
      let cQm=state.list[state.currentQuestion];
      if (cQm.isChecked&&cQm.id>0) {
           testAPI.sendStat({questionid:state.questionID});
          if (cQm.istextanswer&&cQm.win)  testAPI.sendStat({inputid:state.questionID})
          if (!cQm.istextanswer)  testAPI.sendStat({answerid:state.answerID})
          }
      return state;
    // case PUBLICATE_TEST:
    //   return{...state,
    //     dataIsChanged:true,
    //     testslistedit:state.testslistedit
    //         .map(t=>t.id==state.idTestEdit?
    //           (state.check.errors==0&&!t.published?{...t,published:true}:{...t,published:false})
    //           :t),
    //     flugShowAlertWindow:!state.testslistedit[state.currTestEdit].published,//state.check.errors!=0,
    //     messageAlertWindow:state.check.errors!=0?"Публикация не возможна исправьте ошибки теста":"Тест опубликован",
    //     errorAlertWindow:state.check.errors!=0
    //   }
    //
    case SHOW_ALERT_WINDOW:
      console.log("Закрыть окно",action.show);
      return{...state,flugShowAlertWindow:action.show,messageAlertWindow:action.show?state.messageAlertWindow:""}
//    case UNLOAD_FLUG_ON:return{...state,idTestEdit:-1}
    case GET_TEST_RESULT:return{...state,
      testresult:action.tr
    }
    case GET_ALL_TEST_RESULT:return{...state,
      alltestresult:action.atr
    }
    case ADD_USER_RESULT_QUESTION:
    let currQ=state.list[state.currentQuestion]
    let ra=currQ.ans.filter(a=>a.truth)
    console.log(ra);
    console.log(currQ);
    let resQ={
      idtest:state.idTest,
      idquestion:state.questionID,
      idanswer:state.answerID,
      idticket:state.currentTicket,
      inputtext:currQ.inputAnswer,
      time_session:"",
      result:currQ.win,
      session:state.sessionID,
      score:state.currentAnswer>-1?currQ.ans[state.currentAnswer].score:(currQ.win?1:0),
      resFill:state.currentAnswer!=-1?{imgQ:currQ.img,question:currQ.question,
                 imgAR:ra[0]?ra[0].img:null,
                 anstextR:ra[0]?ra[0].anstext:null,
                 imgAU:currQ.ans[state.currentAnswer].img,
                 anstextU:currQ.ans[state.currentAnswer].anstext,
                 statT:currQ.selectcounter,
                 statU:currQ.ans[state.currentAnswer].selectcounter,
                 statR:ra[0]?ra[0].selectcounter:null
               }:
              {imgQ:currQ.img,question:currQ.question,imgAR:null,anstextR:(currQ.textanswer.split('/'))[0],imgAU:null,anstextU:currQ.inputAnswer,
                  statT:currQ.selectcounter,
                  statU:currQ.selectcounter-currQ.answerinputcounter,
                  statR:currQ.answerinputcounter
                  }
    };
//console.log(state.list[state.currentQuestion].ans[state.currentAnswer].score);
    console.log(resQ);
    testAPI.sendUResultQ(resQ);
    return { ...state,
      testresult:{...state.testresult,id:state.idTest,resquestion:[...state.testresult.resquestion,resQ]}
    }
    // case CHECK_TEST:
    // debugger;
    // let errorQuestion=state.listedit.map(q=>({
    //       questnum:q.num,
    //       questionid:q.id,
    //       notrightansw:!q.istextanswer&&!q.ans.some(a=>a.truth),
    //       colansw:(state.testslistedit[state.currTestEdit].addalter<2)&&(q.addalter<2)&&!q.istextanswer&&(q.ans.length<state.testslistforedit[state.currTestEdit].defaultAnswerCol),
    //       notalter:(state.testslistforedit[state.currTestEdit].addalter<2)&&(q.addalter<2)&&!q.istextanswer&&(q.ans.length<2),
    //       notchoice:!q.istextanswer&&(q.ans.length===0),
    //       notuniqueAnswer:!q.istextanswer&&!uniqueArray(q.ans),
    //       emptyAnswer:!q.istextanswer&&q.ans.some(a=>a.anstext.length<3),
    //       emptyInputAnswer:q.istextanswer&&!q.textanswer
    // })).filter(q=>q.emptyAnswer||q.notrightansw||q.notuniqueAnswer||q.emptyInputAnswer||q.colansw||q.notchoice||q.notalter)
    //   return{...state,
    //     check:{
    //       List:errorQuestion,
    //       errors:errorQuestion.reduce((v,i)=>v+(!i.colansw?1:0),0),
    //       warnings:errorQuestion.reduce((v,i)=>v+(i.colansw?1:0),0)
    //     }
    //   }
    case GET_RESULT:return {...state,result:action.data}
    case DELETE_TEST_RESULT:return {...state
      ,alltestresult:state.alltestresult.filter(tr=>tr.session!=action.session)
       }
    case SET_ALL_ANSWERS:return {...state,allAnswers:action.data,list1:addAlterAnswer(state.list,action.data)}
    case SET_CURRENT_TEST_ID:return {...state,idTest:action.id}
//    case SET_CURRENT_EDIT_TEST_ID:return {...state,idTestEdit:action.id}

  default:return state;
    }

}
