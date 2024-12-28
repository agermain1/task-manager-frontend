import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import Modal from './Modal';

const TaskForm = () => {
  const { addNewTask } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      setModalOpen(true); // Abre el modal de confirmación
    }
  };

  const confirmAddTask = () => {
    addNewTask({ title, description });
    setTitle('');
    setDescription('');
    setModalOpen(false); // Cierra el modal tras confirmar
  };

  const cancelAddTask = () => {
    setModalOpen(false); // Cierra el modal si cancela
  };

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            className="mt-2 p-2 border rounded-lg w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            className="mt-2 p-2 border rounded-lg w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg" type="submit">
          Add task
        </button>
      </form>

      {isModalOpen && (
        <Modal onClose={cancelAddTask}>
          <h2 className="text-lg font-bold mb-4">Confirm Action</h2>
          <p className="text-gray-700">Are you sure you want to add this task?</p>
          <div className="flex justify-end space-x-4 mt-4">
            <button
              className="px-4 py-2 bg-gray-300 rounded-lg text-gray-800"
              onClick={cancelAddTask}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={confirmAddTask}
            >
              Confirm
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default TaskForm;
