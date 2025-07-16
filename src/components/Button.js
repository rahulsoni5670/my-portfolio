import React from 'react';
import '../App.css'; // Changed from index.css to App.css

function Button({ children, onClick, className }) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;