import * as axios from 'axios';

const instanceTV=axios.create({
//  withCredentials:true,
  baseURL:"https://192.168.1.141:1925/1/"
  });


  const instanceTest=axios.create({
    withCredentials:true,
    baseURL:"https://api.electricalab.ru/1.0/"
    });


const instance=axios.create({
  withCredentials:true,
  headers:{"API-KEY":"8a359bed-90d2-4666-9ca3-e11c03a6d21a"},
  baseURL:"https://social-network.samuraijs.com/api/1.0/"
});

export const userAPI={
getUsers(currentPage=1,pageSize=20)
  {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response=>{return response.data});
  },

unfollow(id){ return instance.delete(`follow/${id}`)},

follow(id){  return instance.post(`follow/${id}`)}
}

export const authAPI={
getAuthInfo(){ return instance.get(`/auth/me`)},

login(auth){ return instance.post(`/auth/login`,auth)},

logout(auth){ return instance.delete(`/auth/login`) }

}




export const profileAPI={
  getProfile(userId) {return instance.get(`profile/${userId}`) },

  getStatus(userId) { return instance.get(`profile/status/${userId}`) },

  updateStatus(status) {return instance.put(`profile/status`,{status:status}) }
}

export const tvAPI={
  getChannels() { return instanceTV.get(`channels`) },

  setChannel(ch)
  {
    let chid='4_'+ch;
    alert(chid);
    return instanceTV.post(`channels/current`,`"{"id":"${chid}"}"`)
  },

  setMute(t) { return instanceTV.post(`audio/volume`,`{"muted":"${t}"}`) },

  setVolume(t) { return instanceTV.post(`audio/volume`,`{"current":"${t}"}`) }
}

export const authTAPI={
getAuthInfo(){ return instanceTest.get(`/auth/me`)},
login(auth){ return instanceTest.post(`/auth/login`,auth)},
logout(){ debugger; return instanceTest.get(`/auth/logout`) }
}


export const  testAPI={
  loadTest(id){ return instanceTest.get(`test/${id}`) },
  addTest(id,data){ return instanceTest.post(`test/${id}`,data) },
  editTest(id,data){ return instanceTest.patch(`test/${id}`,data) },
  deleteTest(id){ return instanceTest.delete(`test/${id}`) },

  getQuestion(id){ return instanceTest.get(`question/${id}`) },
  addQuestion(data){ return instanceTest.post(`question`,data) },
  editQuestion(idQ,data){ return instanceTest.patch(`question/${idQ}`,data) },
  deleteQuestion(idQ){ return instanceTest.delete(`question/${idQ}`)  },

  addAnswer(idQ,data){ return instanceTest.post(`answer/${idQ}`,data) },
  deleteAnswer(idA){ return instanceTest.delete(`answer/${idA}`)  },
  editAnswer(idA,data){ return instanceTest.patch(`answer/${idA}`,data) },



  saveQuestionPhoto(idQ,file){
    debugger;
    let formData=new FormData();
    formData.append('image',file);
    return instanceTest.post(`question/img/${idQ}`,formData,{headers:{'Content-Type':'multipart/form-data'} });
  },

  saveAnswerPhoto(idA,file){
    let formData=new FormData();
    formData.append('image',file);
    return instanceTest.post(`answer/img/${idA}`,formData,{ headers:{'Content-Type':'multipart/form-data'} } );
  },

deleteQuestionPhoto(idQ){return instanceTest.delete(`question/img/${idQ}`);},
deleteAnswerPhoto(idA){return instanceTest.delete(`answer/img/${idA}`);},

saveTest(filename){},
getTestsList(id){ return instanceTest.get(`testslist`) },

sendStat(data){ return instanceTest.post(`sendstat`,data) },

addTicket(data){ return instanceTest.post(`ticket`,data) },
editTicket(idTicket,data){ return instanceTest.patch(`ticket/${idTicket}`,data) },
deleteTicket(idTicket){ return instanceTest.delete(`ticket/${idTicket}`) },

deleteTestCoverImg(idQ){return instanceTest.delete(`test/img/${idQ}`);},
saveTestCoverImg(idT,file){
  let formData=new FormData();
  formData.append('image',file);
  return instanceTest.post(`test/img/${idT}`,formData,{ headers:{'Content-Type':'multipart/form-data'}} );
},

getAllAnswers(id){ return instanceTest.get(`getallanswers/${id}`) }

}
