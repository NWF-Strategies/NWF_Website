import { useState, useEffect, useRef } from "react";
import { AnimatedCounter } from "react-animated-counter";

const Counter = ({ endValue, delta, suffix, decimalPlaces, prefix = undefined }: any) => {
  const [counterValue, setCounterValue] = useState(endValue + 10);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);
  const [isAnimationDone, setIsAnimationDone] = useState(false);
  const timegap = Math.min(10, 500 / endValue);
  const [size] = useState("57px"); 
  const [key, setKey] = useState(0);
  const renderPrefix = () => {
     if (!prefix && prefix !== 0) return "";
     if (typeof prefix === "string" && prefix.startsWith(" ")) {
       return `\u00A0${prefix}`;
     }
      return prefix;
  };
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
  const handleResize = () => {
    setKey((prevKey) => prevKey + 1); // force remount only
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
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
      setCounterValue((prevValue: number) => {
        if (prevValue > endValue) {
          return 0;
        }

        const newValue = prevValue + delta;
        if (newValue >= endValue) {
          clearInterval(interval);
          setTimeout(() => {
            setCounterValue(endValue);
            setIsAnimationDone(true);
          }, 50);

          return endValue;
        }

        return newValue;
      });
    }, timegap);

    return () => clearInterval(interval);
  }
}, [isVisible, endValue, delta, isAnimationDone]);



  return (
    <div
      ref={counterRef}
      key={key}
      className="flex flex-row flex-nowrap text-center font-poppins font-[1000] [-webkit-text-stroke:2.5px] text-[#43BCCD] sm:leading-[5rem] md:text-[60px] sm:text-[45px] text-[50px]"
    >
      {suffix && suffix.endsWith("%") && (
        <div className="xl:mr-16 lg:mr-8 mr-4"></div>
      )}
      <div key={key} className="mb-1 mt-4 tracking-tight flex items-baseline">
        {prefix !== undefined && (
          <span className="leading-none">{renderPrefix()}</span>
        )}
        <AnimatedCounter
          value={counterValue}
          color="#43BCCD"
          incrementColor="white"
          fontSize={size}
          decimalPrecision={decimalPlaces}
        />
      </div>
      {suffix && (
          <span className="flex-nowrap overflow-hidden whitespace-nowrap ml-1">
            {renderSuffix()}
          </span>
        )}
    </div>
  );
};

export default Counter;
