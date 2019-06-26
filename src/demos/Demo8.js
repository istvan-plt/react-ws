import React, { useState, useCallback, memo } from 'react'
import initialTodos from '../utils/todos'

// !Performance solutions
// ?Note: If the component just gonna have a few leafs (and the leafs are light), it's won't be an issue as re-rendering a component is really cheap in react.

// !Good solution
function Todo({ toggle, id, completed }) {
  const style = { padding: 20, margin: 10, background: completed ? 'green' : 'red', color: 'white' }
  return (
    <div style={style} onClick={() => toggle(id)}>
      Id: {id}
    </div>
  )
}

// !By using memo we can opt out our component from re-renders (just gonna re-render on shallow diff)
const MemoTodo = memo(Todo)

export function TodoList() {
  const [todos, setTodos] = useState(initialTodos)
  // !We saving our function in a useCallback
  const toggle = useCallback(id => {
    setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }, [setTodos])

  return todos.map(todo => (
    <MemoTodo key={todo.id} toggle={toggle} {...todo} />
  ))
}