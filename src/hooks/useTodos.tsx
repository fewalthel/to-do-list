import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store.ts';
import { addTodo, toggleTodo, clearCompleted } from '../store/slices/todosSlice.ts';
import { ITodo } from '../ToDoApp.tsx';

export type TSortOption = 'newest' | 'oldest' | 'az' | 'za';

export const useTodos = (sort: TSortOption) => {
    const dispatch = useDispatch();
    const todos: ITodo[] = useSelector((state: RootState): ITodo[] => state.todos.items);

    const addNewTodo = (text: string): void => {
        if (text.trim()) {
            dispatch(addTodo({ text }));
        }
    };

    const toggleTodoStatus = (id: string): void => {
        dispatch(toggleTodo(id));
    };

    const clearAllCompleted = (): void => {
        dispatch(clearCompleted());
    };

    const sortedTodos = (todos: ITodo[]): ITodo[] => {
        return [...todos].sort((a: ITodo, b: ITodo) => {
            switch (sort) {
                case 'newest':
                    return b.createdAt.getTime() - a.createdAt.getTime();
                case 'oldest':
                    return a.createdAt.getTime() - b.createdAt.getTime();
                case 'az':
                    return a.text.localeCompare(b.text, 'ru', { sensitivity: 'base' });
                case 'za':
                    return b.text.localeCompare(a.text, 'ru', { sensitivity: 'base' });
                default:
                    return 0;
            }
        });
    };

    return {
        todos: sortedTodos(todos),
        addNewTodo,
        toggleTodoStatus,
        clearAllCompleted,
    };
};