import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { StyledNavTitle } from "./NavTitle.styled";

function NavTitle({ isScrolled }) {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <StyledNavTitle $isScrolled={isScrolled}>
      <Link to="/" onClick={handleClick}>
        <strong className="special-title">
          <span className="special-title highlight">A</span>ngélique{" "}
          <span className="special-title highlight">R</span>osin
        </strong>
      </Link>
    </StyledNavTitle>
  );
}

NavTitle.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
};

export default NavTitle;
