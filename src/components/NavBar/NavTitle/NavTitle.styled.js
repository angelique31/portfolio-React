import styled from "styled-components";

export const StyledNavTitle = styled.h1`
  color: white;
  font-family: "Dancing Script", cursive;

  font-size: ${(props) => (props.$isScrolled ? "1.5rem" : "2rem")};
  visibility: visible;

  a {
    color: white;

    strong {
      color: white;
      font-family: "Dancing Script", cursive;
      span.special-title.highlight {
        color: #ffb957;
        font-family: "Dancing Script", cursive;
      }
    }
  }

  span:not(.highlight) {
    color: #ffb957;
  }

  @media (max-width: 1009px) {
    margin: auto;
    text-align: center;
    visibility: ${(props) => (props.$isScrolled ? "hidden" : "visible")};
  }
`;
