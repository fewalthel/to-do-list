import React from 'react';
import { ITodo } from '../ToDoApp';

interface IToDoSectionProps {
    title: string;
    todos: ITodo[];
    isCompleted?: boolean;
}

export const ToDoSection: React.FC<IToDoSectionProps> = ({ title, todos, isCompleted }: IToDoSectionProps) => (
    <div className="col-md-6">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {todos.map(todo => (
                    <div key={todo.id}
                        className={isCompleted ? 'text-muted text-decoration-line-through' : ''}>
                        {todo.text}
                    </div>
                ))}
            </div>
        </div>
    </div>
);