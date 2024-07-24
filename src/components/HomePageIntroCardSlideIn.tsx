import React, { useState, useEffect, useRef } from 'react';
import styles from "../style.tsx";

interface SlideIn1Props {
  children?: React.ReactNode;
}

const HomePageIntroCardSlideIn: React.FC<SlideIn1Props> = ({ children }) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationClass = startAnimation ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0';

  return (
    <div ref={containerRef} className="relative mx-5 z-10">
      <div 
        className={`${styles.callout2} ${styles.paragraph3} hidden sm:block
                    transition-all duration-500 ease-out ${animationClass}`}
      >
        At New Way Forward Strategies, we believe that Democracy starts with
        accessibility. From local elections to nationwide races, campaigns
        begin with the individual. We started the New Way Forward to deploy
        frontiering technologies and strategies, providing change-makers the
        tools to operate cutting-edge, winning campaigns.
      </div>
      <div 
        className={`${styles.callout2} ${styles.paragraph3} hidden md:block
                    transition-all duration-500 ease-out ${animationClass}`}
      >
        Coupled with our team's combined 50 years in campaign management,
        NWF Strategies has won groundbreaking uphill battles, high-profile
        races, and facilitated landmark movements.
      </div>
      {children}
    </div>
  );
};

export default HomePageIntroCardSlideIn;