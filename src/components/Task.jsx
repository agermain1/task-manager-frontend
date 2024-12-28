import React, { useState } from 'react';
import Modal from './Modal';

const Task = ({ task, updateTaskStatus, deleteTask }) => {
  const { _id, title, description, completed } = task;
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const toggleDeleteModal = () => {
    setDeleteModalOpen(!isDeleteModalOpen);
  };

  const confirmDelete = () => {
    deleteTask(_id);
    toggleDeleteModal();
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="border border-gray-300 px-4 py-2">{title}</td>
      <td className="border border-gray-300 px-4 py-2">
        <button
          className={`px-4 py-2 rounded-lg text-white ${completed ? 'bg-green-500' : 'bg-red-500'}`}
          onClick={() => updateTaskStatus(_id, !completed)}
        >
          {completed ? 'Complete' : 'Pending'}
        </button>
      </td>
      <td className="border border-gray-300 px-4 py-2">
        {description ? (
          <button className="text-blue-500 underline font-semibold" onClick={toggleModal}>
            See
          </button>
        ) : (
          <span className="text-gray-800">Does not own</span>
        )}
      </td>
      <td className="border border-gray-300 px-4 py-2 text-center">
        <button
          className="text-red-500 font-bold text-lg"
          onClick={toggleDeleteModal}
        >
          &times;
        </button>
      </td>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <h2 className="text-lg font-bold mb-4">Description</h2>
          <p className="text-gray-700">{description}</p>
        </Modal>
      )}
      {isDeleteModalOpen && (
        <Modal onClose={toggleDeleteModal}>
          <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
          <p className="text-gray-700">Are you sure you want to delete this task?</p>
          <div className="flex justify-end space-x-4 mt-4">
            <button
              className="px-4 py-2 bg-gray-300 rounded-lg text-gray-800"
              onClick={toggleDeleteModal}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={confirmDelete}
            >
              Delete
            </button>
          </div>
        </Modal>
      )}
    </tr>
  );
};

export default Task;
