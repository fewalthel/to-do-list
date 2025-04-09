import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToDoSection } from "./components/ToDoSection.tsx";
import { ToDoForm } from "./components/ToDoForm.tsx";
import { ToDoList } from "./components/ToDoList.tsx";
import { ToDoFooter } from "./components/ToDoFooter.tsx";
import { TSortOption, useTodos } from "./hooks/useTodos.tsx";

export interface ITodo {
    id: string;
    text: string;
    completed: boolean;
    createdAt: Date;
}

export interface IFormData {
    task: string;
}

function ToDoApp() {
    const [sort, setSort] = useState<TSortOption>('newest');
    const { register, handleSubmit, reset } = useForm<IFormData>();

    const { todos, addNewTodo, toggleTodoStatus, clearAllCompleted } = useTodos(sort);

    const onSubmit = (data: IFormData) => {
        addNewTodo(data.task);
        reset();
    };

    const remainingCount = todos.filter((todo) => !todo.completed).length;

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">To Do List</h1>

            <ToDoForm
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                setSort={setSort}
            />

            <ToDoList todos={todos} toggleTodo={toggleTodoStatus} />

            <div className="row mb-4">
                <ToDoSection title="Невыполненные" todos={todos.filter((t) => !t.completed)} />
                <ToDoSection title="Выполненные" todos={todos.filter((t) => t.completed)} isCompleted />
            </div>

            <ToDoFooter remainingCount={remainingCount} clearCompleted={clearAllCompleted} />
        </div>
    );
}

export default ToDoApp;