import { useState, useEffect } from "react";

const UseIntersectionObservers = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const refCurrent = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (refCurrent) {
      observer.observe(refCurrent);
    }

    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent);
      }
    };
  }, [ref]);

  return isVisible;
};

export default UseIntersectionObservers;
