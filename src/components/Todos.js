import React from 'react'

const Todos = ({todos}) => {
  return (
    <div className='todos'>
      {todos && todos.map(todo => (
        <div key={todo.id} className="todo">
          <div>{todo.id}.</div>
          <div>{todo.title}</div>
          <div>{todo.completed ? "Yes" : "No"}</div>
        </div>
      ))}
    </div>
  )
}

export default Todos
