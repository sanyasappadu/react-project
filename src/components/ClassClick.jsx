import React, { Component } from 'react'
// event handler in class
class ClassClick extends Component {
    clickhandler(){
        console.log('button clicked');
    }
  render() {
    return (
      <div>
        <h3>click button</h3>
        <button onClick={this.clickhandler}>click me </button>
        </div>
    )
  }
}

export default ClassClick