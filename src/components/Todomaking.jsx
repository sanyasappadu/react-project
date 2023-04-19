import React, { useState } from 'react'
import TodoL from './TodoL'
import Formtodo from './Formtodo'
const Todomaking = () => {
    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([])
    return (
        <div className='container'>
            <div className='app-wapper'>
                <div>
                    <TodoL />
                </div>
                <div>
                    <Formtodo input={input} setInput={setInput} todos={todos} setTodos={setTodos} />
                </div>
                <div>
                    <TodoL todos={todos} setTodos={setTodos} />
                </div>
            </div>
        </div>
    )
}

export default Todomaking