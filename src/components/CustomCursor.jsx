import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(false);

  useEffect(() => {
    // Add listener for cursor position
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    // Track mouse clicks
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Track hover on links and buttons
    const handleLinkHover = () => {
      setHoveredLink(true);
    };

    const handleLinkLeave = () => {
      setHoveredLink(false);
    };

    // Add all event listeners
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', () => setHidden(true));
    window.addEventListener('mouseenter', () => setHidden(false));

    // Add hover listeners to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleLinkHover);
      el.addEventListener('mouseleave', handleLinkLeave);
    });

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', () => setHidden(true));
      window.removeEventListener('mouseenter', () => setHidden(false));

      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHover);
        el.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  // Re-apply hover listeners when DOM changes
  useEffect(() => {
    const mutationObserver = new MutationObserver(() => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => setHoveredLink(true));
        el.addEventListener('mouseleave', () => setHoveredLink(false));
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => mutationObserver.disconnect();
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div 
        className={`fixed pointer-events-none z-50 w-2 h-2 rounded-full bg-white mix-blend-difference 
                  transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 
                  ${hidden ? 'opacity-0' : 'opacity-100'} 
                  ${clicked ? 'scale-75' : 'scale-100'}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transition: 'opacity 0.3s ease, transform 0.1s ease'
        }}
      />

      {/* Cursor ring */}
      <div 
        className={`fixed pointer-events-none z-50 rounded-full border border-white mix-blend-difference
                  transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out
                  ${hidden ? 'opacity-0' : 'opacity-70'} 
                  ${hoveredLink ? 'w-16 h-16 bg-white bg-opacity-20' : 'w-6 h-6 bg-transparent'}
                  ${clicked ? 'scale-90' : 'scale-100'}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease, transform 0.2s ease, background 0.3s ease'
        }}
      />
    </>
  );
};

export default CustomCursor;
