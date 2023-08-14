import { useContext } from "react";
import { useParams } from "react-router-dom";
import PortfolioContext from "../../context/portfolioContext";
import projectsDataDetail from "../../datas/projectsDataDetail";
import ScrollAwareNavBar from "../../components/NavBar/ScrollAwareNavBar/ScrollAwareNavBar";

const ProjectsDetailPage = () => {
  const { handleShowIntro } = useContext(PortfolioContext);
  const { projectId } = useParams();

  // Si projectId est un index :
  const projectDetail = projectsDataDetail[projectId];

  if (!projectDetail) return <div>Projet non trouvé</div>;

  return (
    <div>
      <ScrollAwareNavBar onAboutClick={handleShowIntro} />
      <h1>{projectDetail.title}</h1>
      <h2>Présentation du Projet</h2>
      <p>{projectDetail.description.intro}</p>
      <h2>Objectifs du Projet</h2>
      <p>{projectDetail.description.objective}</p>
      <h2>Défis et Réalisations</h2>
      <p>{projectDetail.description.challenge}</p>
      <h2>{`Vers une Collaboration : Comment le travail d'équipe aurait pu enrichir le projet`}</h2>
      <ul>
        {projectDetail.description.collaboration.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      {projectDetail.optimizationAndAccessibility && (
        <>
          <h2>Optimisation et Accessibilité</h2>
          <p>{projectDetail.optimizationAndAccessibility}</p>
        </>
      )}

      <div>
        {projectDetail.additionalImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${projectDetail.title} - Image ${index + 1}`}
          />
        ))}
      </div>

      <h2>Outils et Technologies utilisés</h2>
      <ul>
        {projectDetail.toolsAndTech.map((toolOrTech, index) => (
          <li key={index}>{toolOrTech}</li>
        ))}
      </ul>

      {/* Ajoutez d'autres sections ou détails que vous souhaitez afficher ici */}
    </div>
  );
};

export default ProjectsDetailPage;
