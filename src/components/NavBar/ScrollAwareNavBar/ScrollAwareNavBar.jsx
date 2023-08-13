// import { useState, useEffect } from "react";
// import NavBar from "../NavBarColor/NavBarColor";

// const ScrollAwareNavBar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return <NavBar isScrolled={scrolled} />;
// };

// export default ScrollAwareNavBar;

import { useState, useEffect } from "react";
import NavBar from "../NavBarColor/NavBarColor";

const ScrollAwareNavBar = ({ onAboutClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <NavBar isScrolled={scrolled} onAboutClick={onAboutClick} />;
};

export default ScrollAwareNavBar;
