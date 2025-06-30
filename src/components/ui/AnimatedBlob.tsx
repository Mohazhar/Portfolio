import React from 'react';

interface AnimatedBlobProps {
  className?: string;
}

const AnimatedBlob: React.FC<AnimatedBlobProps> = ({ className = '' }) => {
  return (
    <div 
      className={`
        absolute rounded-full filter blur-3xl opacity-30 
        animate-blob mix-blend-multiply 
        ${className}
      `}
    ></div>
  );
};

export default AnimatedBlob;