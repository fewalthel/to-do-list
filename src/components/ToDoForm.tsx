import React, { ChangeEvent } from 'react';
import { UseFormRegister, UseFormHandleSubmit } from 'react-hook-form';
import { IFormData } from "../ToDoApp.tsx";
import { TSortOption } from "../hooks/useTodos.tsx";


interface IToDoFormProps {
    register: UseFormRegister<IFormData>;
    handleSubmit: UseFormHandleSubmit<IFormData>;
    onSubmit: (data: IFormData) => void;
    setSort: (newValue: TSortOption) => void;
}

export const ToDoForm: React.FC<IToDoFormProps> = ({ register, handleSubmit, onSubmit, setSort}: IToDoFormProps) => {
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mb-3 row g-2 align-items-end">
            <div className="col-md-6">
                <label htmlFor="taskInput" className="form-label">Новая задача</label>
                <input
                    id="taskInput"
                    className="form-control"
                    {...register('task')}
                />
            </div>
            <div className="col-md-4">
                <label htmlFor="sortSelect" className="form-label">Сортировать по...</label>
                <select
                    id="sortSelect"
                    className="form-select"
                    onChange={(e: ChangeEvent<HTMLSelectElement>): void => setSort(e.target.value as TSortOption)}>
                    <option value="newest">Сначала новые</option>
                    <option value="oldest">Сначала старые</option>
                    <option value="az">По алфавиту (А-Я)</option>
                    <option value="za">По алфавиту (Я-А)</option>
                </select>
            </div>
            <div className="col-md-2">
                <button type="submit" className="btn btn-primary w-100">Добавить</button>
            </div>
        </form>
    );
}