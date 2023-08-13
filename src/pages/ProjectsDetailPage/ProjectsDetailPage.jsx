import { useParams } from "react-router-dom";
import projectsDataDetail from "../../components/Datas/projectsDataDetail";

const ProjectsDetailPage = () => {
  const { projectId } = useParams();

  // Si projectId est un index :
  const projectDetail = projectsDataDetail[projectId];

  if (!projectDetail) return <div>Projet non trouvé</div>;

  return (
    <div>
      <h1>{projectDetail.title}</h1>
      <h2>{projectDetail.description}</h2>
      <p>{projectDetail.longDescription}</p>

      <div>
        {projectDetail.additionalImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${projectDetail.title} - Image ${index + 1}`}
          />
        ))}
      </div>

      <h2>Fonctionnalités</h2>
      <ul>
        {projectDetail.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      {/* Ajoutez d'autres sections ou détails que vous souhaitez afficher ici */}
    </div>
  );
};

export default ProjectsDetailPage;
