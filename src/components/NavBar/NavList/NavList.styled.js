import styled from "styled-components";

export const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 5rem;
`;

export const StyledNavItem = styled.li`
  a {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    border: 2px solid white;
    border-radius: 20px;
    padding: 5px 25px;

    &:hover {
      background: #e93de680;
    }
  }
`;
