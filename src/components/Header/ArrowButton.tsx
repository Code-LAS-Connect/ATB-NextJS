// components/ArrowButton.tsx
import React from 'react';

interface ArrowButtonProps {
  direction: 'next' | 'prev';
  onClick: () => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick }) => (
  <button
    className={`absolute top-1/2 ${
      direction === 'next' ? 'right-0' : 'left-0'
    } transform -translate-y-1/2 z-40 bg-black bg-opacity-50 text-white text-3xl px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-opacity-80 hover:scale-110`}
    onClick={onClick}//
  >
    {direction === 'next' ? '>' : '<'}
  </button>
);

export default ArrowButton;
