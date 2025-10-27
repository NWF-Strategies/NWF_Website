import React, { useState, useEffect } from 'react';

const Cursor: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isMobile = window.matchMedia('(pointer: coarse)').matches;
  const [showCursor, setShowCursor] = useState(isMobile ? false : true);

  useEffect(() => {
    //const cursor = document.querySelector('.cursorcircle') as HTMLElement;

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'A' ||
        target.classList.contains('cursor-should-hover')
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
        target.tagName === 'A'||
        target.classList.contains('cursor-should-hover')
      ) {
        setHovered(false);
      }
    };

    const handleClick = () => {
      setShowCursor(true);
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
        if (isMobile) setShowCursor(false);
      }, 380);
    };
    
    window.addEventListener('mousemove', moveCursor);
    document.body.addEventListener('mouseenter', handleMouseEnter, true);
    document.body.addEventListener('mouseleave', handleMouseLeave, true);
    document.body.addEventListener('mousedown', handleClick, true);

    // Center cursor and trigger click on page load just in case
    const centerCursor = () => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setPosition({ x: centerX, y: centerY });
      handleClick();
    };

    centerCursor();

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
    transform: `translate(-50%, -50%) translate3d(${position.x}px, ${position.y}px, 0)`,
    pointerEvents: 'none',
    zIndex: 9999,
    transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease, opacity 0.2s ease, border-width 0.2s ease',
    visibility: 
      isMobile
        ? showCursor 
          ? 'visible' 
          : 'hidden'
        : 'visible',
  };

  return (
    <div
      className="cursorcircle"
      style={cursorStyle}
    />
  );
};

export default Cursor;