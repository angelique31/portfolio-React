import { Link } from "react-router-dom";
import { useContext } from "react";
import PortfolioContext from "../../context/portfolioContext";

import { useTranslation } from "react-i18next";
import projectsData from "../../datas/projectsData";

import UseVisibilityEffect from "../ScrollAwareComponents/UseVisibilityEffect";

import {
  Title,
  Subtitle,
  ProjectsWrapper,
  PlayIconStyled,
  ProjectsContainer,
  ProjectCard,
  ProjectImageWrapper,
  ProjectImage,
  ProjectInfoWrapper,
  ProjectTechnologies,
  ProjectTitle,
  ProjectDescription,
  FlexContainer,
  StyledLink,
  IconWrapper,
  LogoImage,
  StyledExternalIcon,
} from "./ProjectsSection.styled";
import GitLogo from "../../assets/logos/GitLogo2.png";
import PlayIcon from "../../assets/Icons/play.svg";
import VideoModal from "../Video/VideoModal/VideoModal";

const ProjectsSection = () => {
  const containerRef = UseVisibilityEffect();
  const { openVideoModal } = useContext(PortfolioContext);
  const { t } = useTranslation();

  return (
    <div id="mes-realisations">
      <VideoModal />
      <ProjectsContainer ref={containerRef}>
        <Title>{t("homepage.projects_title")}</Title>

        <Subtitle>{t("homepage.projects_subtitle")}</Subtitle>

        <ProjectsWrapper>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} delayIndex={index}>
              <ProjectImageWrapper>
                {index !== 0 && (
                  <Link
                    to={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ProjectImage src={project.images[0]} alt={project.title} />
                  </Link>
                )}

                {index === 0 && (
                  <ProjectImage src={project.images[0]} alt={project.title} />
                )}

                {index === 0 && (
                  <PlayIconStyled
                    src={PlayIcon}
                    alt="Play Video"
                    onClick={openVideoModal}
                  />
                )}
              </ProjectImageWrapper>

              <ProjectInfoWrapper>
                <ProjectTechnologies>
                  {project.technologies.join(", ")}
                </ProjectTechnologies>
                <ProjectTitle>
                  {t(`homepage.project_${index}_title`)}
                </ProjectTitle>
                <ProjectDescription>
                  {t(`homepage.project_${index}_description`)}
                </ProjectDescription>
                <FlexContainer>
                  <StyledLink to={`/project-detail/${project.id}`}>
                    {t("homepage.projects_learn_more")}
                  </StyledLink>

                  <IconWrapper>
                    <Link
                      to={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LogoImage
                        className="git-logo"
                        src={GitLogo}
                        alt="Git Logo"
                      />
                    </Link>

                    <Link
                      to={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <StyledExternalIcon />
                    </Link>
                  </IconWrapper>
                </FlexContainer>
              </ProjectInfoWrapper>
            </ProjectCard>
          ))}
        </ProjectsWrapper>
      </ProjectsContainer>
    </div>
  );
};

export default ProjectsSection;
