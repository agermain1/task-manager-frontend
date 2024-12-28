import React from 'react';

const TaskFilters = ({ setFilter }) => {
  return (
    <div className="flex space-x-4">
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
  );
};

export default TaskFilters;
