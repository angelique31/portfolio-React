import { useState, useEffect } from "react";
import NavBar from "../NavBarColor/NavBarColor";

const ScrollAwareNavBar = ({ onAboutClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1009);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1009);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <NavBar
      isScrolled={scrolled}
      isMobile={isMobile}
      onAboutClick={onAboutClick}
    />
  );
};

export default ScrollAwareNavBar;
