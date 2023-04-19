import React from 'react'

const TodoL =({todos,setTodos})=> {
  return (
    <div>
      {todos.map((todo)=>(
        <li className='todo-list' key={todo.id}>
          <input 
          type="text" 
          value={todo.title} 
          className='list' 
          onChange={(event)=>event.preventDefault()}
          />
        </li>
      ))}
    </div>
  )
}

export default TodoL