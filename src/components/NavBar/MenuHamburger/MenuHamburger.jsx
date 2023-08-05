import { StyledHamburger } from "./MenuHamburger.styled";
import PropTypes from "prop-types";

function MenuHamburger({ onClick, isOpen }) {
  return (
    <StyledHamburger
      isOpen={isOpen}
      onClick={onClick}
      aria-label="Toggle navigation"
      aria-expanded={isOpen}
    >
      <span></span>
      <span></span>
      <span></span>
    </StyledHamburger>
  );
}
MenuHamburger.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default MenuHamburger;
