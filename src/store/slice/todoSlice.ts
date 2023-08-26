import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ITodo } from "~types/todo";
import { initialState } from "~utils/constants";

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        create: (state, action: PayloadAction<ITodo>) => {
            state.todos.push(action.payload);
        },
        toggleDone: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find((t) => t.id === action.payload);

            if (todo) {
                todo.done = !todo.done;
            }
        },
        deleteSelected: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((t) => t.id !== action.payload);
        },
        deleteAll: (state) => {
            state.todos = initialState.todos;
        }
    }
});

export const { create, toggleDone, deleteSelected, deleteAll } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
