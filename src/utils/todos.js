export const createTodos = number => {
  const todos = []
  for (let i = 0; i < number; i++) {
    todos.push({
      id: i,
      completed: i % 3
    })
  }
  return todos
}

export default createTodos(1000)