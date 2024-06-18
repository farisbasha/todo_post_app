import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    todoList: [],
    isLoading: false,
    isError: false
}


export const getTodoData = createAsyncThunk("todo/getTodoData", async () => {
    const response = await axios.get("https://json-placeholder.mock.beeceptor.com/todos",)
    return response.data
})



const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers:{
        setTodoList: (state, action) => {
            state.todoList = action.payload
        },
        setIsTodoLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setIsTodoError: (state, action) => {
            state.isError = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getTodoData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getTodoData.fulfilled, (state, action) => {
            state.todoList = action.payload
            state.isLoading = false
        })
        builder.addCase(getTodoData.rejected, (state, action) => {
            console.log(action)
            state.isError = true
            state.isLoading = false
        })
    }
})


export const {setTodoList, setIsTodoLoading, setIsTodoError} = todoSlice.actions
export default todoSlice.reducer