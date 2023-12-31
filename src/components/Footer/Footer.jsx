import { useTranslation } from "react-i18next";
import {
  FooterContainer,
  FooterParagraph,
  OrangeText,
  SocialLink,
  SocialList,
  SocialListItem,
  IconContainer,
  StyledImgLinkedin,
  StyledImgGit,
} from "./Footer.styled";
import linkedin from "../../assets/logos/linkedin-icon.png";
import github from "../../assets/logos/GitLogo.png";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <FooterContainer>
      <FooterParagraph>
        {t("footer.paragraphs.designedBy")}{" "}
        <OrangeText>Angélique Rosin</OrangeText>
      </FooterParagraph>

      <FooterParagraph>{t("footer.paragraphs.copyright")}</FooterParagraph>

      <div>
        <FooterParagraph>
          <OrangeText>{t("footer.paragraphs.findMe")}</OrangeText>
        </FooterParagraph>

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
      </div>
    </FooterContainer>
  );
};

export default Footer;
