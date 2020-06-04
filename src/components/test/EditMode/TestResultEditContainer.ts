import TestResult from './TestResultEdit';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {setResultItemAC,addResultItemAC,deleteResultItemAC,saveResultTC} from '../../../redux/reducerTestsEdit';
import { AppStateType } from '../../../redux/redux-store';
import { IResult, ITest } from '../../../redux/interface';
import { getCurrentEditTestParamSEL, getCurrentEditTestTypeIdParamSEL } from '../../../redux/test-selectors';



export type TypeStateProps={
  result:Array<IResult>
  typeid:number
}

export type TypeDispatchProps={
   setResultItem:(data:IResult)=>void
   addResultItem:()=>void
   deleteResultItem:(id:number)=>void
//   saveResult:(data:IResult[])=>void
 }


export type ITestResult=TypeDispatchProps & TypeStateProps

let mapStateToProps=(state:AppStateType):TypeStateProps=>{
  return {
    result:state.TestsEdit.result,
    typeid:getCurrentEditTestTypeIdParamSEL(state)
  }
}

export default compose (
    connect
     <TypeStateProps,TypeDispatchProps,void,AppStateType>
    (
      mapStateToProps,
      {
      addResultItem:addResultItemAC,
      setResultItem:setResultItemAC,
      deleteResultItem:deleteResultItemAC,
    //saveResult:saveResultTC
    }
  )
)
(TestResult)
