import React, { useState } from 'react'
import initialTodos from '../utils/todos'

function Todo({ toggle, id, completed }) {
  const style = { padding: 20, margin: 10, background: completed ? 'green' : 'red', color: 'white' }
  return (
    <div style={style} onClick={() => toggle(id)}>
      Id: {id}
    </div>
  )
}

export function TodoList() {
  const [todos, setTodos] = useState(initialTodos)

  const toggle = id => {
    setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  return todos.map(todo => (
    <Todo key={todo.id} toggle={toggle} {...todo} />
  ))
}