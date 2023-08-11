import { Link } from "react-router-dom";
import { StyledNavList, StyledNavItem } from "./NavLinks.styled";
import PropTypes from "prop-types";

function NavLinks({ isOpen }) {
  return (
    <StyledNavList $isOpen={isOpen}>
      <StyledNavItem>
        <Link to="/about">Qui je suis?</Link>
      </StyledNavItem>
      <StyledNavItem>
        <Link to="/cv">Mon cv</Link>
      </StyledNavItem>
      <StyledNavItem>
        <Link to="/realisations">Mes réalisations</Link>
      </StyledNavItem>
      <StyledNavItem>
        <Link to="/contact">Contactez-moi</Link>
      </StyledNavItem>
    </StyledNavList>
  );
}
NavLinks.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default NavLinks;
