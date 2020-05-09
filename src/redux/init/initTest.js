export const initState={
  list:[],
  list1:[
    {question:"Здесь будет вопрос1"
     ,img:null
     ,ans:[{anstext:"Ответ 1",truth:true,uch:false,img:null}
          ,{anstext:"Ответ 2",truth:false,uch:false,img:null}
          ,{anstext:"Ответ 3",truth:false,uch:false,img:null}]
     ,noChoise:null
                                      },
    {question:"Здесь будет вопрос2"
     ,img:null
     ,ans:[{anstext:"Ответ 1",truth:false,uch:false,img:null}
          ,{anstext:"Ответ 2",truth:false,uch:false,img:null}
          ,{anstext:"Ответ 3",truth:true,uch:false,img:null}
          ,{anstext:"Ответ 4",truth:true,uch:false,img:null}]
     ,noChoise:null
                                      },
    {question:"Здесь будет вопрос3"
     ,img:null
     ,ans:[{anstext:"Ответ 1",truth:true,uch:false,img:null}
          ,{anstext:"Ответ 2",truth:true,uch:false,img:null}
          ,{anstext:"Ответ 3",truth:true,uch:false,img:null}]
     ,noChoise:null
                                      },
    {question:"Здесь будет вопрос4"
      ,img:null
      ,ans:[{anstext:"Ответ 1",truth:true,uch:false,img:null}
           ,{anstext:"Ответ 2",truth:true,uch:false,img:null}
           ,{anstext:"Ответ 3",truth:true,uch:false,img:null}]
     ,noChoise:null
                                      },
    {question:"Здесь будет вопрос5"
      ,img:null
      ,ans:[{anstext:"Ответ 1",truth:true,uch:false,img:null}
           ,{anstext:"Ответ 2",truth:true,uch:false,img:null}
           ,{anstext:"Ответ 3",truth:true,uch:false,img:null}]
     ,noChoise:null
                                      },
    {question:"Здесь будет вопрос6"
      ,img:null
      ,ans:[{anstext:"Ответ 1",truth:true,uch:false,img:null}
           ,{anstext:"Ответ 2",truth:true,uch:false,img:null}
           ,{anstext:"Ответ 3",truth:true,uch:false,img:null}]
      ,noChoise:null
                                      }
  ],
  testparam:{
    testname:"Новый тест",
    limit_quest:50,
    shuffleQuestion:true,
    shuffleAnswer:true,
    multichoise:false,
    idTest:-1,
    defaultAnswerCol:4,
    defaultQuestion:"Новый вопрос",
    defaultAnswer:"Новый ответ",
    timeQuestResult:5000,
    type_levelgame:true,
    endOnWrong:true,
    showNumQuest:true,
    showNumAns:true,
    published:true,
    wrongpermissible:1
  },
  flugShowTicketList:false,
  currentTicket:-1,
  sessionID:null,
  currentQuestion:-1,
  currentAnswer:-1,
  allIsChecked:false,
  isSynchronizing:false,
  editMode:false,
  testresult:{
    resquestion:[],
    allIsChecked:false,
    isDoneTest:false
  },
};
