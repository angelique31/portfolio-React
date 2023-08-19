import { StyledHamburger } from "./MenuHamburger.styled";
import PropTypes from "prop-types";

function MenuHamburger({ onClick, isOpen }) {
  return (
    <StyledHamburger
      //préfixer le nom du prop avec un $  pour que le prop isOpen ne soit pas transmis directement au DOM
      $isOpen={isOpen}
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
