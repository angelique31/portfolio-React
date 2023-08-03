import { StyledNavList, StyledNavItem } from "./NavList.styled";

function NavList() {
  return (
    <StyledNavList>
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

export default NavList;
