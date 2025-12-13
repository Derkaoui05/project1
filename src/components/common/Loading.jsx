import React from 'react';

const Loading = ({ className = '', variant = 'default' }) => {
  const variants = {
    default: 'h-4 w-4',
    large: 'h-8 w-8',
    small: 'h-2 w-2',
    image: 'h-48 w-full',
  };

  return (
    <div className={`animate-pulse ${className}`}>
      {variant === 'image' ? (
        <div className="bg-neutral-800 rounded-lg w-full h-full"></div>
      ) : (
        <div className={`bg-neutral-700 rounded-full ${variants[variant]}`}></div>
      )}
    </div>
  );
};

export default Loading;