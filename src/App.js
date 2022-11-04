/*
Redux In React JS
npm install redux
npm install react-redux
npm install redux-thunk
npm install redux-devtools-extension
-> It is all about managing state values in multiple components at a time, using redux store

Store: Combined application state from all components(BigJavaScript object)
Provider : Provides the state data to all components
Components : Encapsulates the main component
Actions->Reducers->Store

//We can add these lines for incrementing it by 1 
<button onClick={IncAction()}>Increment</button>
<button onClick={DecAction()}>Decrement</button>
*/

import React from 'react'
import { connect } from 'react-redux';
import { IncAction,DecAction } from './action';

export const App = ({local_variable,IncAction,DecAction}) => {
  return (
    <div>
      <center>
        <h1>{local_variable}</h1>
        <button onClick={()=>IncAction(5)}>Increment</button>
        <button onClick={()=>DecAction(5)}>Decrement</button>
      </center>
    </div>
  )
}
const mapStateToProps=state=>(
  {
    local_variable : state
  }
)
export default connect(mapStateToProps,{IncAction,DecAction})(App);
