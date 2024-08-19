import { useState, useEffect, useRef } from "react";
import { AnimatedCounter } from "react-animated-counter";

const Counter = ({ endValue, delta, suffix, decimalPlaces }: any) => {
  const [counterValue, setCounterValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);
  const [isAnimationDone, setIsAnimationDone] = useState(false);
  const timegap = Math.min(100, 100 * delta);
  const [size, setSize] = useState("50px"); // Default size
  const [key, setKey] = useState(0); // Key to force remount
  const renderSuffix = () => {
    if (suffix && suffix.startsWith(" ")) {
      return `\u00A0${suffix}`;
    } else if (suffix) {
     return suffix;
    } else {
      return "";
    }
  };

  useEffect(() => {
    const initialResize = () => {
      const width = window.innerWidth;
        if (width >= 768) {
          setTimeout(() => {
            setSize("60px");
          }, 1000);
        } else if (width >= 650) {
          setTimeout(() => {
            setSize("45px");
          }, 1000); 
        } else {
          setTimeout(() => {
            setSize("50px");
          }, 1000); 
        }
    }
    const handleResize2 = () => {
      if(true){
        const width = window.innerWidth;
        if (width >= 768) {
          setTimeout(() => {
            setSize("60px");
            setKey((prevKey) => prevKey + 1);
          }, 1000);
        } else if (width >= 650) {
          setTimeout(() => {
            setSize("45px");
            setKey((prevKey) => prevKey + 1);
          }, 1000); 
        } else {
          setTimeout(() => {
            setSize("50px");
            setKey((prevKey) => prevKey + 1);
          }, 1000); 
        }
      }
    };
    initialResize(); 
    const timeout = setTimeout(() => {
      initialResize();
    }, 1000); // 1-second delay
  
    window.addEventListener("resize", handleResize2);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize2);
    };
  }, []);
  


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimationDone) {
          setIsVisible(true);
        }
      },
      { threshold: 0.8 }
    );
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isAnimationDone]);

  useEffect(() => {
    if (isVisible && !isAnimationDone) {
      const interval = setInterval(() => {
        setCounterValue((prevValue) => {
          const newValue = prevValue + delta;
          if (newValue >= endValue) {
            clearInterval(interval);
            setIsAnimationDone(true);
            return endValue;
          } else {
            return newValue;
          }
        });
      }, timegap); 
      return () => clearInterval(interval);
    }
  }, [isVisible, endValue, delta, isAnimationDone]);

  return (
    <div ref={counterRef} key={key} className="flex flex-row flex-nowrap text-center font-poppins tracking-tighter font-[1000] bold text-[#43BCCD] sm:leading-[5rem] md:text-[60px] sm:text-[45px] text-[50px]">
        {suffix && suffix.endsWith("%") && <div className="xl:mr-16 lg:mr-8 mr-4"></div>}
        <div className="mb-1 mt-3.5 tracking-tight">
          <AnimatedCounter
          value={counterValue}
          color="#43BCCD"
          incrementColor="white"
          fontSize={size}
          decimalPrecision={decimalPlaces}
          />
        </div>
        <div className="flex-nowrap overflow-hidden whitespace-nowrap">
          {suffix && <span>{renderSuffix()}</span>}
        </div>
    </div>
  );
};

export default Counter;
