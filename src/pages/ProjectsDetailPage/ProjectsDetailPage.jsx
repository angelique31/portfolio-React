import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PortfolioContext from "../../context/portfolioContext";
import projectsDataDetail from "../../datas/projectsDataDetail";
import ScrollAwareNavBar from "../../components/NavBar/ScrollAwareNavBar/ScrollAwareNavBar";
import Section from "./Section";
import VisibilityAwareContainer from "./VisibilityAwareContainer";

import {
  ProjectDetailContainer,
  IntroContainer,
  ObjectiveContainer,
  ChallengeContainer,
  AlignedImageContainer,
  ResponsiveContainer,
  AccessibilityContainer,
  CollaborationContainer,
  MainTitle,
  StyledAnchorLink,
  SectionTitle,
  TechnologyContainer,
  TextParagraph,
  UnorderedList,
  ListItem,
  ImageChallengeContainer,
  ProjectImage,
  AccessibilityImage,
  MobileImage,
} from "./ProjectsDetailPage.styled";
import Footer from "../../components/Footer/Footer";

const ProjectsDetailPage = () => {
  const { handleShowIntro } = useContext(PortfolioContext);
  const { projectId } = useParams();
  const { t } = useTranslation();

  const projectDetail = projectsDataDetail.find(
    (project) => project.id === projectId
  );

  const externalLink = projectDetail.externalLink;

  if (!projectDetail) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <>
      <ScrollAwareNavBar onAboutClick={handleShowIntro} />
      <ProjectDetailContainer>
        <IntroContainer>
          <MainTitle>{t(`projects.${projectId}.title`)}</MainTitle>
          <StyledAnchorLink
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("projectDetails.viewWebsite")}
          </StyledAnchorLink>
        </IntroContainer>
        <TextParagraph>
          {" "}
          {t(`projects.${projectId}.description.intro`)}
        </TextParagraph>

        <VisibilityAwareContainer>
          <ObjectiveContainer>
            <Section title={t(`projectDetails.projectObjectives`)}>
              {t(`projects.${projectId}.description.objective`)}
            </Section>
          </ObjectiveContainer>
        </VisibilityAwareContainer>

        <VisibilityAwareContainer>
          <ChallengeContainer>
            <Section title={t("projectDetails.challengesAndAchievements")}>
              {t(`projects.${projectId}.description.challenge`)}
            </Section>
          </ChallengeContainer>
        </VisibilityAwareContainer>

        <VisibilityAwareContainer>
          <AlignedImageContainer>
            <ImageChallengeContainer>
              <ProjectImage
                src={projectDetail.additionalImages[0]}
                alt={`${projectDetail.title} - Image 1`}
              />
              <MobileImage
                src={projectDetail.additionalImages[1]}
                alt={`${projectDetail.title} - Image 1`}
              />
            </ImageChallengeContainer>

            <ResponsiveContainer>
              <Section title={t("projectDetails.adaptability")}>
                {t(`projects.${projectId}.description.responsive`)}
              </Section>
            </ResponsiveContainer>
          </AlignedImageContainer>
        </VisibilityAwareContainer>

        <VisibilityAwareContainer>
          <AccessibilityContainer>
            <SectionTitle>
              {t("projectDetails.performanceAndAccessibility")}
            </SectionTitle>
            <TextParagraph>
              {t(
                `projects.${projectId}.description.optimizationAndAccessibility`
              )}
            </TextParagraph>
            <AccessibilityImage
              src={projectDetail.additionalImages[2]}
              alt={`${projectDetail.title} - Image 1`}
            />
          </AccessibilityContainer>
        </VisibilityAwareContainer>

        <VisibilityAwareContainer>
          <CollaborationContainer>
            <SectionTitle>
              {t("projectDetails.towardsCollaboration")}
            </SectionTitle>

            <UnorderedList>
              {t(`projects.${projectId}.description.collaboration`, {
                returnObjects: true,
              }).map((point, index) => (
                <ListItem key={`collab-${index}`}>{point}</ListItem>
              ))}
            </UnorderedList>
          </CollaborationContainer>
        </VisibilityAwareContainer>

        <VisibilityAwareContainer>
          <TechnologyContainer>
            <SectionTitle>
              {t("projectDetails.toolsAndTechnologies")}
            </SectionTitle>

            <UnorderedList>
              {t(`projects.${projectId}.toolsAndTech`, {
                returnObjects: true,
              }).map((point, index) => (
                <ListItem key={`collab-${index}`}>{point}</ListItem>
              ))}
            </UnorderedList>
          </TechnologyContainer>
        </VisibilityAwareContainer>
      </ProjectDetailContainer>
      <Footer />
    </>
  );
};

export default ProjectsDetailPage;
