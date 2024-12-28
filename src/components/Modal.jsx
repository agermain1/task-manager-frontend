import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-gray-300 rounded-lg shadow-lg p-6 relative animate-fadeIn"
        style={{ animation: 'fadeIn 0.3s ease-in-out' }}
      >
        <button
          className="absolute top-2 right-2 text-gray-900 hover:text-gray-400"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>,
    document.body
  );
};

export default Modal;
