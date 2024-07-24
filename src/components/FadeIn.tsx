import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 1000,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        if (domRef.current) observer.unobserve(domRef.current);
      }
    });
    
    if (domRef.current) observer.observe(domRef.current);
    
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  const fadeInStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transition: `opacity ${duration}ms ease-in-out ${delay}ms`,
  };

  return (
    <div
      ref={domRef}
      className={className}
      style={fadeInStyle}
    >
      {children}
    </div>
  );
};

export default FadeIn;