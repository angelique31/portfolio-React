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

// ScrollAwareNavBar.js
import { useState, useEffect } from "react";
import NavBar from "../NavBarColor/NavBarColor";

const ScrollAwareNavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Si la largeur de la fenêtre est inférieure à 1010px, ne faites rien
      if (window.innerWidth <= 1010) {
        setScrolled(false);
        return;
      }

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <NavBar isScrolled={scrolled} />;
};

export default ScrollAwareNavBar;
