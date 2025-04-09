import React from 'react';
import { ITodo } from '../ToDoApp';

interface IToDoListProps {
    todos: ITodo[];
    toggleTodo: (id: string) => void;
}

export const ToDoList: React.FC<IToDoListProps> = ({ todos, toggleTodo }: IToDoListProps) => (
    <div className="card mb-4">
        <div className="card-body">
            <h5 className="card-title">Все задачи</h5>
            {todos.map(todo => (
                <div key={todo.id} className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={todo.completed}
                        onChange={(): void => toggleTodo(todo.id)}
                    />
                    <label
                        className={`form-check-label ${todo.completed ? 'text-decoration-line-through text-muted' : ''}`}>
                        {todo.text}
                        <small className="text-muted ms-2">({todo.createdAt.toLocaleString()})</small>
                    </label>
                </div>
            ))}
        </div>
    </div>
);