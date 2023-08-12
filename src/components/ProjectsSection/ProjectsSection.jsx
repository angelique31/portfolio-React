import projectsData from "../Datas/projectsData";
import {
  Title,
  ProjectsWrapper,
  ProjectsContainer,
  ProjectCard,
  ProjectImageWrapper,
  ProjectImage,
  ProjectInfoWrapper,
  ProjectTechnologies,
  ProjectTitle,
  ProjectDescription,
  ProjectLink,
} from "./ProjectsSection.styled";

const ProjectsSection = () => {
  return (
    <div>
      <ProjectsContainer>
        <Title>Mes projets</Title>
        <ProjectsWrapper>
          {projectsData.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImageWrapper>
                <ProjectImage src={project.images[0]} alt={project.title} />
              </ProjectImageWrapper>
              <ProjectInfoWrapper>
                <ProjectTechnologies>
                  {project.technologies.join(", ")}
                </ProjectTechnologies>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectLink
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  En savoir plus
                </ProjectLink>
              </ProjectInfoWrapper>
            </ProjectCard>
          ))}
        </ProjectsWrapper>
      </ProjectsContainer>
    </div>
  );
};

export default ProjectsSection;
