import React, { Component } from 'react'
import TodoItems from './TodoItems'
class TodoList extends Component {
    constructor(props) {
      super(props)
      this.state = {
         items:[]
      }
      this.addItem=this.addItem.bind(this)
      this.deleteItem=this.deleteItem.bind(this)
    }
    addItem(e){
        if(this._inputElement.value !== ''){
            var newItem={
                text:this._inputElement.value,
                key:Date.now()
            }
            this.setState((prevState)=>{
                return{
                    items : prevState.items.concat(newItem)
                }
            })
            this._inputElement.value="";
        }
        console.log(this.state.items);
        e.preventDefault();
    }
    deleteItem(key){
        var filterItems=this.state.items.filter(function (){
            return (item.key!== key);
        })
        this.setState({
            items:filterefItems
        })
    }
  render() {
    return (
      <div className='todolistmain'>
        <div className='header'>
            <form action="" onSubmit={this.addItem}>
                <input type="text" ref={(a)=> this._inputElement = a}
                 placeholder='enter text'/>
                <button type='submit'>add</button>
            </form>

        </div>
        <TodoItems enteries={this.state.items} delete={this.deleteItem}/>
      </div>
    )
  }
}

export default TodoList