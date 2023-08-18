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

// import frTranslations from "../../../locales/fr/translation.json";
// console.log(frTranslations.projects.delicesCulinaires.toolsAndTech);

const ProjectsDetailPage = () => {
  const { handleShowIntro } = useContext(PortfolioContext);
  const { projectId } = useParams();

  const { t } = useTranslation();

  const projectDetail = projectsDataDetail[projectId];

  const projectData = projectsData[projectId];
  const externalLink = projectData.externalLink;

  if (!projectDetail) return <div>Projet non trouvé</div>;

  return (
    <>
      <ScrollAwareNavBar onAboutClick={handleShowIntro} />
      <ProjectDetailContainer>
        <IntroContainer>
          <MainTitle>{t("projects.delicesCulinaires.title")}</MainTitle>
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
          {t("projects.delicesCulinaires.description.intro")}
        </TextParagraph>

        <ObjectiveContainer>
          <SectionTitle>{t("projectDetails.projectObjectives")}</SectionTitle>
          <TextParagraph>
            {t("projects.delicesCulinaires.description.objective")}
          </TextParagraph>
        </ObjectiveContainer>

        <ChallengeContainer>
          <SectionTitle>
            {t("projectDetails.challengesAndAchievements")}
          </SectionTitle>
          <TextParagraph>
            {t("projects.delicesCulinaires.description.challenge")}
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
              {t("projects.delicesCulinaires.description.responsive")}
            </TextParagraph>
          </ResponsiveContainer>
        </AlignedImageContainer>

        <AccessibilityContainer>
          <SectionTitle>
            {t("projectDetails.performanceAndAccessibility")}
          </SectionTitle>
          <TextParagraph>
            {t(
              "projects.delicesCulinaires.description.optimizationAndAccessibility"
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
            {t("projects.delicesCulinaires.description.collaboration", {
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
            {t("projects.delicesCulinaires.toolsAndTech", {
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
