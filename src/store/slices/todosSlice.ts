import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { ITodo } from "../../ToDoApp.tsx";

interface TodosState {
    items: ITodo[];
}

const initialState: TodosState = {
    items: [],
};

interface AddTodoPayload {
    text: string;
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<AddTodoPayload>) => {
            const newTodo: ITodo = {
                id: uuidv4(),
                text: action.payload.text,
                completed: false,
                createdAt: new Date(),
            };
            state.items.push(newTodo);
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            const todo = state.items.find((t) => t.id === action.payload);
            if (todo) todo.completed = !todo.completed;
        },
        clearCompleted: (state) => {
            state.items = state.items.filter((todo) => !todo.completed);
        },
    },
});

export const { addTodo, toggleTodo, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer;