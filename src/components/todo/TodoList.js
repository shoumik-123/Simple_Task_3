

import React from 'react';
import { useSelector } from 'react-redux';
import { DeleteAlart } from './DeleteListAlart';
import { EditAlart } from './EditTodo';

const TodoList = () => {
    const todoItems = useSelector((state) => state.todo.value);
    return (
        <div className="container mx-auto">
            <div className="my-5 p-2">
                <table className="table-auto w-full text-left text-dark">
                    <thead>
                    <tr className="mt-3">
                        <th className="px-4 py-2">No</th>
                        <th className="px-4 py-2">Task Name</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Edit</th>
                        <th className="px-4 py-2">Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {todoItems.map((item, i) => {
                        if (typeof item === 'string' && item.trim() !== '') {
                            return (
                                <tr className="" key={i.toString()}>
                                    <td className="px-4 py-2">{i + 1}</td>
                                    <td className="px-4 py-2">{item}</td>
                                    <td className="px-4 py-2">
                                        <select
                                            className="block py-2.5 px-1 w-full text-sm border-2 bg-transparent appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer "
                                        >
                                            <option className="text-orange-600" selected>Pending</option>
                                            <option className="text-yellow-500"  value="Ongoing">Ongoing</option>
                                            <option className="text-red-700"  value="Cancel">Cancel</option>
                                            <option className="text-green-600"  value="Complete">Complete</option>
                                        </select>
                                    </td>
                                    <td className="px-4 py-2">
                                        <button
                                            onClick={() => {
                                                EditAlart(i, item);
                                            }}
                                            className="btn btn-sm btn-primary text-light"
                                        >
                                            Edit
                                        </button>
                                    </td>
                                    <td className="px-4 py-2">
                                        <button
                                            onClick={() => {
                                                DeleteAlart(i);
                                            }}
                                            className="btn-sm btn btn-danger text-light"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            );
                        } else {
                            return null;
                        }
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TodoList;
