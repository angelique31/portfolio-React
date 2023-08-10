import { StyledNavList, StyledNavItem } from "./NavList.styled";
import PropTypes from "prop-types";

function NavList({ isOpen }) {
  return (
    <StyledNavList $isOpen={isOpen}>
      <StyledNavItem>
        <a href="#">Qui je suis?</a>
      </StyledNavItem>
      <StyledNavItem>
        <a href="#">Mon cv</a>
      </StyledNavItem>
      <StyledNavItem>
        <a href="#">Mes réalisations</a>
      </StyledNavItem>
      <StyledNavItem>
        <a href="#">Contactez-moi</a>
      </StyledNavItem>
    </StyledNavList>
  );
}

NavList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default NavList;
