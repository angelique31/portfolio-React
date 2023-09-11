import {
  SocialLink,
  SocialList,
  SocialListItem,
  IconContainer,
  StyledImgLinkedin,
  StyledImgGit,
} from "./SocialLinks.styled";
import linkedin from "../../assets/logos/linkedin-icon.png";
import github from "../../assets/logos/GitLogo.png";

const SocialLinks = () => {
  return (
    <SocialList>
      <SocialListItem>
        <SocialLink href="https://www.linkedin.com/in/ang%C3%A9lique-rosin-5163a9231/">
          <IconContainer>
            <StyledImgLinkedin src={linkedin} alt="LinkedIn" />
          </IconContainer>
        </SocialLink>
      </SocialListItem>
      <SocialListItem>
        <SocialLink href="https://github.com/angelique31?tab=repositories">
          <IconContainer>
            <StyledImgGit src={github} alt="Github" />
          </IconContainer>
        </SocialLink>
      </SocialListItem>
    </SocialList>
  );
};

export default SocialLinks;
