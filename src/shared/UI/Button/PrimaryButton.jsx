import React from 'react';
import './PrimaryButton.css'; 

function PrimaryButton({ children, className = '', ...props }) {
  return (
    <button className={`primary-button ${className}`} {...props}>
      {children}
    </button>
  );
}

export default PrimaryButton;
