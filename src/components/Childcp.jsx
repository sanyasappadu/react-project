import React, { Component } from 'react'

export class Childcp extends Component {
    onTrigger=(event)=>{
        this.props.parentCallback(event.target.myname.value);
        event.preventDefault()
    }
  render() {
    return (
      <div>
        <form onSubmit={this.onTrigger}>
            <input type="text" 
            name='myname' placeholder='enter name'/>
            <br />
            <input type="submit" value='Submit' />
            <br />
        </form>
      </div>
    )
  }
}

export default Childcp