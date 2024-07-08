import React, { useState, useEffect } from 'react';

const Cursor: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector('.cursorcircle') as HTMLElement;

    const moveCursor = (e: MouseEvent) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;

      if (cursor) {
        cursor.style.transform = `translate(-50%, -50%) translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'A'
      ) {
        setHovered(true);
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'A'
      ) {
        setHovered(false);
      }
    };

    const handleClick = () => {
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 380); // Adjust the delay as needed
    };

    window.addEventListener('mousemove', moveCursor);
    document.body.addEventListener('mouseenter', handleMouseEnter, true);
    document.body.addEventListener('mouseleave', handleMouseLeave, true);
    document.body.addEventListener('mousedown', handleClick, true);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeEventListener('mouseenter', handleMouseEnter, true);
      document.body.removeEventListener('mouseleave', handleMouseLeave, true);
      document.body.removeEventListener('mousedown', handleClick, true);
    };
  }, []);

  const cursorStyle: React.CSSProperties = {
    width: clicked ? '70px' : (hovered ? '16px' : '26px'),
    height: clicked ? '70px' : (hovered ? '16px' : '26px'),
    border: clicked ? '1px solid white' : (hovered ? '3px solid white' : '2px solid #43BCCD'),
    backgroundColor: clicked ?  'transparent' : (hovered ? 'rgba(255, 255, 255, 0.18)' : 'rgba(67, 188, 205, 0.18)'), 
    opacity: clicked ? 0.1 : 1,
    borderRadius: '50%',
    position: 'fixed',
    top: '0',
    left: '0',
    transform: 'translate(-50%, -50%)', // Center the cursor
    pointerEvents: 'none',
    zIndex: 9999,
    transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease, opacity 0.2s ease, border-width 0.2s ease',
  };

  return (
    <div
      className="cursorcircle"
      style={cursorStyle}
    />
  );
};

export default Cursor;
