import React, { useState } from 'react'

const TodoItemCard = ({
    todo,

}) => {
    const [isChecked, setIsChecked] = useState(todo.completed)
   
  return (
    <div className="flex p-4 bg-lime-200 gap-5">
        <p className='text-md font-bold'>{todo.title}</p>
        <input type="checkbox" checked={isChecked}
            onChange={() => {
                setIsChecked(!isChecked)
            }}
         />
    </div>
  )
}

export default TodoItemCard
