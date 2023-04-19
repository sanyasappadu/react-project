import React, { Component } from 'react'
// import UpdatedComponent from './WithCounter'
import WithCounter from './WithCounter'
class ClickCounter extends Component {

  render() {
    const {count,incrementCount}=this.props

    return (
        <button onClick={incrementCount}>{this.props.name} click {count} times</button>
      
    )
  }
}

export default WithCounter(ClickCounter,5) 