import React from 'react';
import CreateTodo from '../components/todo/CreateTodo';
import TodoList from '../components/todo/TodoList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center">
            <div className="container mx-auto py-10 px-4">
                <div className="max-w-xl mx-auto">
                    <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-violet-500 font-bold text-center shadow-slate-800 mb-6">ADD TASK FOR YOURSELF</h1>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="bg-gray-100 p-4">
                            <CreateTodo />
                        </div>
                        <div className="p-4">
                            <TodoList />
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default TodoPage;
