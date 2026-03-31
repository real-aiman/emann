import React from 'react';

const SnakeOverlay = ({ src }) => {
  return (
    <img 
      src={src} 
      className="snake-img" 
      alt="snake" 
      
      onError={(e) => (e.target.style.display = 'none')} 
    />
  );
};

export default SnakeOverlay;