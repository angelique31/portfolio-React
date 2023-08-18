import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PortfolioContext from "../../context/portfolioContext";
import projectsDataDetail from "../../datas/projectsDataDetail";
import ScrollAwareNavBar from "../../components/NavBar/ScrollAwareNavBar/ScrollAwareNavBar";
import projectsData from "../../datas/projectsData";

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

const ProjectsDetailPage = () => {
  const { handleShowIntro } = useContext(PortfolioContext);
  const { projectId } = useParams();
  // console.log("ID récupéré:", projectId);
  const { t } = useTranslation();

  // const toolsAndTechPoints = t(`projects.${projectId}.toolsAndTech`, {
  //   returnObjects: true,
  // });
  // console.log(toolsAndTechPoints);

  // const projectDetail = projectsDataDetail[projectId];
  // console.log(projectDetail);
  // const projectData = projectsData[projectId];
  // const projectData= projectsData.find((project) => project.id === projectId);
  // console.log("Données des projets:", projectsData);
  // console.log("Projet trouvé:", projectData);
  let projectDetail;
  for (let i = 0; i < projectsDataDetail.length; i++) {
    if (projectsDataDetail[i].id === projectId) {
      projectDetail = projectsDataDetail[i];
      break;
    }
  }
  // console.log("Projet correspondant à l'ID avec la boucle for:", projectDetail);

  const externalLink = projectsData.externalLink;

  if (!projectDetail) {
    return <div>Projet non trouvé</div>;
  }

  console.log("Rendu du détail du projet");

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

        <ObjectiveContainer>
          <SectionTitle>{t(`projectDetails.projectObjectives`)}</SectionTitle>
          <TextParagraph>
            {t(`projects.${projectId}.description.objective`)}
          </TextParagraph>
        </ObjectiveContainer>

        <ChallengeContainer>
          <SectionTitle>
            {t("projectDetails.challengesAndAchievements")}
          </SectionTitle>
          <TextParagraph>
            {t(`projects.${projectId}.description.challenge`)}
          </TextParagraph>
        </ChallengeContainer>
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
            <SectionTitle>{t("projectDetails.adaptability")}</SectionTitle>
            <TextParagraph>
              {t(`projects.${projectId}.description.responsive`)}
            </TextParagraph>
          </ResponsiveContainer>
        </AlignedImageContainer>

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
      </ProjectDetailContainer>
    </>
  );
};

export default ProjectsDetailPage;
