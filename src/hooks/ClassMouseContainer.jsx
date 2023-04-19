import React, { Component } from 'react'
import ClassMouse from './ClassMouse'
class ClassMouseContainer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         display:false
      }
    }
  render() {
    console.log(this.state.display)
    return (
      <div>
        <button onClick={()=>this.setState({display:true})}> click me</button>

       {this.state.display && <ClassMouse/>}
      </div>
    )
  }
}

export default ClassMouseContainer