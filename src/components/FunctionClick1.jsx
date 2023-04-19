import React from 'react'
// event handling in function
function FunctionClick1() {
  function clickhandler(){
    console.log('button clicked');
  }
  return (
    <div>
        <button onClick={clickhandler} >click me</button>
    </div>
  )
}

export default FunctionClick1