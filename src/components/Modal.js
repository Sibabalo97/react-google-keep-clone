import React from 'react';
import "./Modal.css";



function Modal({ note, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{note.title}</h3>
        <p>{note.text}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
