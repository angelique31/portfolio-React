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
  ProjectImage,
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

        <ProjectImage
          src={projectDetail.additionalImages[0]}
          alt={`${projectDetail.title} - Image 1`}
        />

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

        {projectDetail.optimizationAndAccessibility && (
          <ObjectiveContainer>
            {" "}
            {/* Consider using another container or renaming for better semantics */}
            <SectionTitle>Optimisation et Accessibilité</SectionTitle>
            <TextParagraph>
              {projectDetail.optimizationAndAccessibility}
            </TextParagraph>
          </ObjectiveContainer>
        )}

        <ImageContainer>
          {projectDetail.additionalImages.map((image, index) => (
            <ImageWrapper key={`img-${index}`}>
              <ProjectImage
                src={image}
                alt={`${projectDetail.title} - Image ${index + 1}`}
              />
            </ImageWrapper>
          ))}
        </ImageContainer>

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
