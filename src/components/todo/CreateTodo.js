import React, { useRef } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { AddTodo } from '../../redux/state/todoSlice';
import {toast} from "react-toastify";

const CreateTodo = () => {
    const dispatch = useDispatch();
    const taskInput = useRef();

    const handleAddTodo = () => {
        const taskValue = taskInput.current.value.trim();
        if (taskValue) {
            dispatch(AddTodo(taskValue));
            taskInput.current.value = '';
        }
        else {
            toast.dark("You can't write your task")
        }
    };

    const shakeItem = useSelector((state)=>state.settings.shake);
    return (
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row sm:flex-col items-center justify-between">
                <input
                    id={shakeItem}
                    ref={taskInput}
                    type="text"
                    placeholder="Enter task..."
                    className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-lg"
                />
                <button
                    onClick={handleAddTodo}
                    className="ml-4 py-2 px-6 bg-blue-500 text-white sm:my-3  rounded-md transition duration-300 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 text-lg shadow-md"
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default CreateTodo;
