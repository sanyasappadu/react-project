import React, { Component } from 'react'
// import UpdatedComponent from './WithCounter'
import WithCounter from './WithCounter'
class HaverCounter extends Component {
    
  render() {
    const {count,incrementCount}=this.props
    return (
      <div>
        <h2 onMouseOver={incrementCount}>hovered {count} times</h2>
      </div>
    )
  }
}

export default WithCounter(HaverCounter,10)