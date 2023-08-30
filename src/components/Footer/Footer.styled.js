import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 20px;
  background: #313552;
  text-align: center;
  color: rgb(255, 66, 105);
  font-weight: 600;
`;

export const FooterParagraph = styled.p`
  margin-bottom: 10px;
  color: #d1d5db;
`;

export const OrangeText = styled.span`
  color: #ffb957;
`;

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
