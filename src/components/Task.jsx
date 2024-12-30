import React, { useState } from 'react';
import Modal from './Modal';

const Task = ({ task, updateTaskStatus, deleteTask, editTask }) => {
  const { _id, title, description, completed, createdAt } = task;
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isConfirmEditModalOpen, setConfirmEditModalOpen] = useState(false);
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);

  const toggleModal = () => setModalOpen(!isModalOpen);
  const toggleDeleteModal = () => setDeleteModalOpen(!isDeleteModalOpen);
  const toggleEditModal = () => setEditModalOpen(!isEditModalOpen);
  const toggleConfirmEditModal = () => setConfirmEditModalOpen(!isConfirmEditModalOpen);
  const toggleErrorModal = () => setErrorModalOpen(!isErrorModalOpen);

  const confirmDelete = () => {
    deleteTask(_id);
    toggleDeleteModal();
  };

  const confirmEdit = () => {
    if (!editedTitle.trim()) {
      toggleErrorModal();
    } else {
      toggleConfirmEditModal();
    }
  };

  const saveEdit = async () => {
    try {
      await editTask(_id, { title: editedTitle, description: editedDescription });
      toggleConfirmEditModal();
      toggleEditModal();
    } catch (error) {
      toggleConfirmEditModal();
      toggleErrorModal();
    }
  };

  // Formatear la fecha de creación a dd/mm/yyyy
  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
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
      <td className="border border-gray-300 px-4 py-2">{formatDate(createdAt)}</td>
      <td className="border border-gray-300 px-4 py-2 text-center space-x-4">
        <button className="text-green-500 font-bold text-lg" onClick={toggleEditModal}>
          &#9998;
        </button>
        <button className="text-red-500 font-bold text-lg" onClick={toggleDeleteModal}>
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
      {isEditModalOpen && (
        <Modal onClose={toggleEditModal}>
          <h2 className="text-lg font-bold mb-4">Edit Task</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                className="mt-2 p-2 border rounded-lg w-full"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                className="mt-2 p-2 border rounded-lg w-full"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end space-x-4 mt-4">
            <button
              className="px-4 py-2 bg-gray-300 rounded-lg text-gray-800"
              onClick={toggleEditModal}
            >
              Cancel
            </button>
            <button
              className={`px-4 py-2 rounded-lg text-white ${!editedTitle.trim() ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500'}`}
              disabled={!editedTitle.trim()}
              onClick={confirmEdit}
            >
              Save
            </button>
          </div>
        </Modal>
      )}
      {isConfirmEditModalOpen && (
        <Modal onClose={toggleConfirmEditModal}>
          <h2 className="text-lg font-bold mb-4">Confirm Changes</h2>
          <p className="text-gray-700">Are you sure you want to save these changes?</p>
          <div className="flex justify-end space-x-4 mt-4">
            <button
              className="px-4 py-2 bg-gray-300 rounded-lg text-gray-800"
              onClick={toggleConfirmEditModal}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={saveEdit}
            >
              Confirm
            </button>
          </div>
        </Modal>
      )}
      {isErrorModalOpen && (
        <Modal onClose={toggleErrorModal}>
          <h2 className="text-lg font-bold mb-4">Error</h2>
          <p className="text-gray-700">You must enter a title to save changes.</p>
          <div className="flex justify-end space-x-4 mt-4">
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={toggleErrorModal}
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </tr>
  );
};

export default Task;
