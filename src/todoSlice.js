import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [
        {
            id : 1,
            text : "i will play today"
        }
    ]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addToDo : (state, action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeToDo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        moveToFirst: (state, action) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload);
            if (index > 0) {
              const [selectedTodo] = state.todos.splice(index, 1); // Remove todo
              state.todos.unshift(selectedTodo); // Move to first index
            }
        }
    }
})

export const { addToDo , removeToDo , moveToFirst} = todoSlice.actions

export default todoSlice.reducer