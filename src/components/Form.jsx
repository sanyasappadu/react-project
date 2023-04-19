import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:''
      }
    }
    handlerUsernameChange= event =>{
        this.setState({
            username:event.target.value
        })
    }
    handlercommentsChange= event =>{
        this.setState({
            comments: event.target.value
        })
    }
    handlertopicChange = event=>{
        this.setState({
            topic:event.target.value
        })
    }
    handelSubmit =event=>{
        alert(`${this.state.comments} ${this.state.topic} ${this.state.username}`)
        event.preventDefult()
    }
  render() {
    return (
        <form onSubmit={this.handelSubmit}>
        <div>
            <label htmlFor="">username</label>
            <input type="text" value={this.state.username}
            onChange={this.handlerUsernameChange}/>
        </div>
        <div>
            <label htmlFor="">comments</label>
            <textarea type='text' value={this.state.comments} 
            onChange={this.handlercommentsChange}></textarea>
        </div>
        <div>
            <label htmlFor=""> topic</label>
            <select value={this.state.topic} onChange={this.handlertopicChange}>
                <option value="react">react</option>
                <option value="angular">angular</option>
                <option value="vue">vue</option>
            </select>
        </div>
        <button type='submit'>submit</button>
       </form>
    )
  }
}

export default Form