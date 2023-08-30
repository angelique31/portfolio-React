import { useEffect, useRef } from "react";
import UseIntersectionObservers from "./UseIntersectionObservers";

const UseVisibilityEffect = () => {
  const containerRef = useRef(null);
  const isVisible = UseIntersectionObservers(containerRef);

  useEffect(() => {
    if (isVisible) {
      containerRef.current.classList.add("visible");
    } else {
      containerRef.current.classList.remove("visible");
    }
  }, [isVisible]);

  return containerRef;
};

export default UseVisibilityEffect;
