import React from 'react';

const ThreeBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-[#05051a]">
      {/* Simple star background with CSS only - much lighter on performance */}
      <div className="stars">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-white w-[1px] h-[1px] opacity-70"
            style={{
              top: `${Math.floor(Math.random() * 100)}%`,
              left: `${Math.floor(Math.random() * 100)}%`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ThreeBackground;