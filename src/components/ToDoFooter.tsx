import React from 'react';

interface IToDoFooterProps {
    remainingCount: number;
    clearCompleted: () => void;
}

export const ToDoFooter: React.FC<IToDoFooterProps> = ({ remainingCount, clearCompleted }: IToDoFooterProps) => (
    <div className="d-flex justify-content-between align-items-center">
        <span>Осталось выполнить задач: {remainingCount}</span>
        <button className="btn btn-danger" onClick={clearCompleted}>
            Очистить выполненные
        </button>
    </div>
);
