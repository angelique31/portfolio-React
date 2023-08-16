import { useContext } from "react";
import { useParams } from "react-router-dom";
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
  ImageContainer,
  ImageWrapper,
  ImageChallengeContainer,
  ProjectImage,
  AccessibilityImage,
  MobileImage,
} from "./ProjectsDetailPage.styled";

const ProjectsDetailPage = () => {
  const { handleShowIntro } = useContext(PortfolioContext);
  const { projectId } = useParams();
  const projectDetail = projectsDataDetail[projectId];

  const projectData = projectsData[projectId];
  const externalLink = projectData.externalLink;
  console.log(externalLink);
  if (!projectDetail) return <div>Projet non trouvé</div>;

  return (
    <>
      <ScrollAwareNavBar onAboutClick={handleShowIntro} />
      <ProjectDetailContainer>
        <IntroContainer>
          <MainTitle>{projectDetail.title}</MainTitle>
          <StyledAnchorLink
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le site
          </StyledAnchorLink>
        </IntroContainer>
        <TextParagraph>{projectDetail.description.intro}</TextParagraph>

        <ObjectiveContainer>
          <SectionTitle>Objectifs du Projet</SectionTitle>
          <TextParagraph>{projectDetail.description.objective}</TextParagraph>
        </ObjectiveContainer>

        <ChallengeContainer>
          <SectionTitle>Défis et Réalisations</SectionTitle>
          <TextParagraph>{projectDetail.description.challenge}</TextParagraph>
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
            <SectionTitle>
              Adaptabilité : Répondre à Chaque Dispositif
            </SectionTitle>
            <TextParagraph>
              {projectDetail.description.responsive}
            </TextParagraph>
          </ResponsiveContainer>
        </AlignedImageContainer>

        <AccessibilityContainer>
          <SectionTitle>Performance et Accessibilité</SectionTitle>
          <TextParagraph>
            {projectDetail.description.optimizationAndAccessibility}
          </TextParagraph>
          <AccessibilityImage
            src={projectDetail.additionalImages[2]}
            alt={`${projectDetail.title} - Image 1`}
          />
        </AccessibilityContainer>

        <CollaborationContainer>
          <SectionTitle>
            {`Vers une Collaboration : Comment le travail d'équipe aurait pu
            enrichir le projet`}
          </SectionTitle>
          <UnorderedList>
            {projectDetail.description.collaboration.map((point, index) => (
              <ListItem key={`collab-${index}`}>{point}</ListItem>
            ))}
          </UnorderedList>
        </CollaborationContainer>

        <TechnologyContainer>
          <SectionTitle>Outils et Technologies utilisés</SectionTitle>
          <UnorderedList>
            {projectDetail.toolsAndTech.map((toolOrTech, index) => (
              <ListItem key={`tech-${index}`}>{toolOrTech}</ListItem>
            ))}
          </UnorderedList>
        </TechnologyContainer>
      </ProjectDetailContainer>
    </>
  );
};

export default ProjectsDetailPage;
