import { StyledHamburger } from "./HamburgerStyles";

function Hamburger() {
  return (
    <StyledHamburger aria-label="Toggle navigation" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </StyledHamburger>
  );
}

export default Hamburger;
