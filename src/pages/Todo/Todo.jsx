import React, { useEffect, useState } from 'react'
import TodoItemCard from './components/TodoItemCard'
import axios from 'axios'

const Todo = () => {
    const [todoList, setTodoList] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getTodoData = async () =>{
            try {
                const response = await axios.get("https://json-placeholder.mock.beeceptor.com/todos",)
                setTodoList(response.data)
            } catch (error) {
                setIsError(true)
            }finally{
                setIsLoading(false)
            }
        }

        getTodoData()
    }, [])


    if (isLoading) {
        return <div>Loading...</div>
    }

    if(isError){
        return <div>Something went wrong</div>
    }


  return (
    <div className=' flex flex-col gap-3'>
        {
            todoList.map((todo) => {
                return <TodoItemCard key={todo.id} todo={todo} />
            })
        }
    </div>
  )
}

export default Todo

