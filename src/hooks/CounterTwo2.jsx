import React, {useReducer} from 'react'

const initialState={
    firstCounter:0
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increament':
            return {firstCounter: state.firstCounter+1}
        case 'decreament':
            return {firstCounter: state.firstCounter-1}
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterTwo2() {
    const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <div>Count - {count.firstCounter}</div>
        <button onClick={()=> dispatch({type:'increament'})}>Increament</button>
        <button onClick={()=> dispatch({type:'decreament'})}>Decreament</button>
        <button onClick={()=> dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default CounterTwo2