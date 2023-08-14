import { Link } from "react-router-dom";
import { StyledNavTitle } from "./NavTitle.styled";

function NavTitle({ isScrolled }) {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <StyledNavTitle isScrolled={isScrolled}>
      <Link to="/" onClick={handleClick}>
        <strong>
          <span>P</span>ortfolio
          <br />
          Angélique <span>Rosin</span>
        </strong>
      </Link>
    </StyledNavTitle>
  );
}

export default NavTitle;
