import { StyledNavList, StyledNavItem } from "./NavList.styled";
import PropTypes from "prop-types";

function NavList({ isOpen }) {
  return (
    <StyledNavList $isOpen={isOpen}>
      <StyledNavItem>
        <a href="#">A propos</a>
      </StyledNavItem>
      <StyledNavItem>
        <a href="#">Mon cv</a>
      </StyledNavItem>
      <StyledNavItem>
        <a href="#">Réalisations</a>
      </StyledNavItem>
      <StyledNavItem>
        <a href="#">Contact</a>
      </StyledNavItem>
    </StyledNavList>
  );
}

NavList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default NavList;
