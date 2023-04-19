import React from 'react'
import {v4 as uuidv4} from "uuid"
const Formtodo=({input,setInput,todo,setTodos})=> {
    const onInputChange=(event)=>{
        setInput(event.target.value)
    }
    const onFormSubmit=(event)=>{
        event.preventDefault()
        setTodos([...setTodos,{id:uuidv4(),title:input,completed:false}])
        setInput("f")
    }
  return (
    <div>
        <form action="" onSubmit={onFormSubmit}>
            <input 
            type="text" 
            placeholder='enter todo list' 
            className='task-input'
            value={input}
            required 
            onChange={onInputChange}
             />
            <button className='button-add' type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Formtodo