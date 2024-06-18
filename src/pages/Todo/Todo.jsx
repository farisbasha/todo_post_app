import React, { useEffect, useState } from 'react'
import TodoItemCard from './components/TodoItemCard'
import { useDispatch, useSelector } from 'react-redux'
import { getTodoData } from '../../redux/slices/todoSlice'


const Todo = () => {
    const dispatch = useDispatch()
    const todoState = useSelector(state => state.todo)

    useEffect(() => {
        dispatch(getTodoData())
    }, [])


    if (todoState.isLoading) {
        return <div>Loading...</div>
    }

    if(todoState.isError){
        return <div>Something went wrong</div>
    }


  return (
    <div className=' flex flex-col gap-3'>
        {
            todoState.todoList.map((todo) => {
                return <TodoItemCard key={todo.id} todo={todo} />
            })
        }
    </div>
  )
}

export default Todo

