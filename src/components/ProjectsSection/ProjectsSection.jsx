import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import projectsData from "../Datas/projectsData";

import UseIntersectionObservers from "../UseIntersectionObservers/UseIntersectionObservers";

import {
  Title,
  Subtitle,
  ProjectsWrapper,
  ProjectsContainer,
  ProjectCard,
  ProjectImageWrapper,
  ProjectImage,
  ProjectInfoWrapper,
  ProjectTechnologies,
  ProjectTitle,
  ProjectDescription,
  StyledLink,
} from "./ProjectsSection.styled";

const ProjectsSection = () => {
  const containerRef = useRef(null);
  const isVisible = UseIntersectionObservers(containerRef);
  const { t } = useTranslation();

  useEffect(() => {
    if (isVisible) {
      containerRef.current.classList.add("visible");
    } else {
      containerRef.current.classList.remove("visible");
    }
  }, [isVisible]);
  return (
    <div id="mes-realisations">
      <ProjectsContainer ref={containerRef}>
        <Title>{t("projects_title")}</Title>
        <Subtitle>{t("projects_subtitle")}</Subtitle>

        <ProjectsWrapper>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} delayIndex={index}>
              <ProjectImageWrapper>
                <Link
                  to={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ProjectImage src={project.images[0]} alt={project.title} />
                </Link>
              </ProjectImageWrapper>
              <ProjectInfoWrapper>
                <ProjectTechnologies>
                  {project.technologies.join(", ")}
                </ProjectTechnologies>
                <ProjectTitle>{t(`project_${index}_title`)}</ProjectTitle>
                <ProjectDescription>
                  {t(`project_${index}_description`)}
                </ProjectDescription>
                <StyledLink to={`/project-detail/${index}`}>
                  {t("projects_learn_more")}
                </StyledLink>
              </ProjectInfoWrapper>
            </ProjectCard>
          ))}
        </ProjectsWrapper>
      </ProjectsContainer>
    </div>
  );
};

export default ProjectsSection;
