import React from 'react';

const Dialog = ({ visible, onClose, children }) => {
  if (!visible) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Dialog;
