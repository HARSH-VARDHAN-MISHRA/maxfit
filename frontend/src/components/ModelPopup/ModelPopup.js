// ModelPopup.js
import React from 'react';
import './ModelPopup.css';

const ModelPopup = ({ imgModel,proName, onClose }) => {
  return (
    <div className={`modal ${imgModel ? 'show' : ''}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{proName}</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close">
                <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="modal-body">
            <img src={imgModel} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelPopup;
