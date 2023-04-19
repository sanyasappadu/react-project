import React, { Component } from 'react'
import Childcp from './Childcp'
class Parentcp extends Component {
    state={
        name:''
    }
    handleCallback=(childData)=>{
        this.setState({name:childData})
    }
  render() {
    const {name}=this.state
    return (
      <div>
        <Childcp parentCallback={this.handleCallback}  /> {name}
      </div>
    )
  }
}

export default Parentcp