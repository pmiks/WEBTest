import React from 'react';
import {NavLink} from "react-router-dom";
import {Field,reduxForm} from 'redux-form';

const AddMenuForm=(props)=>{
return (<form onSubmit={props.handleSubmit}>
        <div>
        <Field component="input" type="text" name="newMenuItem" placeholder="Новый пункт"/>
        </div>
        <div>
        <button>Добавить</button>
        </div>
      </form>)
}


export default reduxForm({form:'addMenuItem'})(AddMenuForm);
