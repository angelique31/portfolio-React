import styled from "styled-components";

export const StyledNavTitle = styled.h1`
  color: white;
  font-family: "Poppins", sans-serif;
  padding-bottom: 20px;
  font-size: ${(props) => (props.isScrolled ? "1.2rem" : "1.5rem")};
  visibility: visible;
  span {
    color: #ffb957;
  }
  strong {
    font-weight: 100;
  }
  a {
    color: white;
  }
  @media (max-width: 1009px) {
    margin: auto;
    text-align: center;
    visibility: ${(props) => (props.isScrolled ? "hidden" : "visible")};
  }
`;
