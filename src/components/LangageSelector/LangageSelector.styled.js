import styled from "styled-components";

export const LanguageDropdown = styled.div`
  position: relative;
  display: inline-block;

  button {
    color: white;
    border-radius: 0;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    padding: 1px 6px;
    background-color: #dfe0dc;
    position: relative;
    &::after {
      content: "";
      display: inline-block;
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 8px solid #dfe0dc;
      position: absolute;
      top: 50%;
      right: -13px;
      transform: translateY(-50%);
    }
    img {
      width: 20px;
      display: flex;
    }
  }
`;

export const FlagContainer = styled.div`
  padding: 1px 6px;
  background-color: #dfe0dc;
`;

export const DropdownContent = styled.div`
  position: absolute;
  right: 0;
  background-color: #313552;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 20px;
  padding: 10px 30px;
  @media (max-width: 500px) {
    padding: 5px 30px;
  }
  div {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    margin: 5px 0;
    &:hover {
      color: #ffb957;
    }

    img {
      width: 20px;
    }
  }
`;
