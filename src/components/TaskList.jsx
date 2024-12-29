import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import Task from './Task';

const TaskList = () => {
  const { tasks, loading, removeTaskById, editTaskById } = useContext(TaskContext);
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  const handleUpdateTaskStatus = (id, completed) => {
    editTaskById(id, { completed });
  };

  return (
    <div className="mt-6">
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
          onClick={() => setFilter('completed')}
        >
          Complete
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
          onClick={() => setFilter('pending')}
        >
          Pending
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="3" className="text-center py-4">Loading tasks...</td>
              </tr>
            ) : (
              filteredTasks.map((task) => (
                <Task
                  key={task._id}
                  task={task}
                  updateTaskStatus={handleUpdateTaskStatus}
                  deleteTask={removeTaskById}
                  editTask={editTaskById}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;