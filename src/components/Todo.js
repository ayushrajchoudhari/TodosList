import React from 'react'

export const Todo = ({todo, onDelete}) => {
  return (
    <div>
      <h5>{todo.sno}. {todo.task} </h5>
      <p>{todo.description} </p>
      <button className='btn btn-sm btn-danger' onClick={()=> onDelete(todo)}>Delete</button>
    </div>
  )
}

