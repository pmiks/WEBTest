import React from 'react';
import {Field,reduxForm} from 'redux-form';
import './login.css';
import {requiredField,maxLength30,maxLengthCreator} from '../../common/validators';
import {InputText} from '../../common/formcontrols';

const maxLength25=maxLengthCreator(25);
const LoginForm=(props)=>{
  return  <form onSubmit={props.handleSubmit}>
    <div>
      <Field component={InputText} name="login" placeholder="Логин"
             validate={[requiredField,maxLength25]}/>
    </div>
    <div>
      <Field component={InputText} name="password" placeholder="Пароль"
              validate={[requiredField,maxLength25]}/>
    </div>
    <div>
      <label>Запомнить меня</label><Field component="input" name="remember" type="checkbox" />
    </div>
{props.error &&
    <div className={"formSummaryError"}>
      {props.error}
    </div>
}
      <div>
        <button>Вход</button>
      </div>
  </form>
  }

const LoginRedux=reduxForm({form:'login'})(LoginForm)

const Login=(props)=>{
  const fSubmit=(formData)=>{
      props.loginThunkCreator(formData.login,formData.password,formData.remember);
  }

  return <div className="LoginForm">
  <h1>Login</h1>
    <LoginRedux onSubmit={fSubmit}/>
  </div>
}



export default Login
