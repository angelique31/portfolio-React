import { StyledNavTitle } from "./NavTitle.styled";

function NavTitle({ isScrolled }) {
  return (
    <StyledNavTitle isScrolled={isScrolled}>
      <strong>
        <span>P</span>ortfolio
        <br />
        Angélique <span>Rosin</span>
      </strong>
    </StyledNavTitle>
  );
}

export default NavTitle;
