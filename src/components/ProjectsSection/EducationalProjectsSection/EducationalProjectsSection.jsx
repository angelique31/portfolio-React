import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import educationalProjectsData from "../../../datas/educationalProjectsData";

import {
  ProjectsContainer,
  // Title,
  Subtitle,
  ProjectsWrapper,
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
} from "../ProfessionalProjectsSection/ProfessionalProjectsSection.styled";

import GitLogo from "../../../assets/logos/GitLogo2.png";

import UseVisibilityEffect from "../../ScrollAwareComponents/UseVisibilityEffect";

const EducationalProjectsSection = () => {
  const { t } = useTranslation();
  const containerRef = UseVisibilityEffect();

  return (
    <div id="mes-projets-formation">
      <ProjectsContainer ref={containerRef}>
        {/* <Title>{t("homepage.projects_title")}</Title> */}
        <Subtitle>{t("homepage.training_projects_subtitle")}</Subtitle>

        <ProjectsWrapper>
          {educationalProjectsData.map((project, index) => (
            <ProjectCard key={index} delayIndex={index}>
              <ProjectImageWrapper>
                <Link
                  to={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ProjectImage src={project.images[0]} alt={project.title} />
                </Link>
              </ProjectImageWrapper>

              <ProjectInfoWrapper>
                <ProjectTitle>
                  {t(`homepage.training_project_${index}_title`)}
                </ProjectTitle>
                <ProjectTechnologies>
                  {project.technologies.join(", ")}
                </ProjectTechnologies>

                <ProjectDescription>
                  {t(`homepage.training_project_${index}_description`)}
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

export default EducationalProjectsSection;
