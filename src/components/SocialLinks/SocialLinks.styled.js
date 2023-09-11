import styled from "styled-components";

export const SocialLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    color: #0056b3;
  }
`;

export const SocialList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialListItem = styled.li`
  display: inline;
  margin: 0 15px;
`;

export const StyledImgLinkedin = styled.img`
  width: 50px;
  filter: brightness(120%) saturate(110%);
`;

export const StyledImgGit = styled.img`
  width: 35px;
  filter: brightness(120%) saturate(110%);
`;

export const IconContainer = styled.div`
  display: inline-block;
  transition: all 0.9s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
