import { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PortfolioContext from "../../context/portfolioContext";
import Slider from "../../components/Slider/Slider";
import Introduction from "../../components/Introduction/Introduction";
import Specialties from "../../components/Specialities/Specialities";
import SoftSkillWheel from "../../components/SoftSkillWheel/SoftSkillWheel";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import ScrollAwareNavBar from "../../components/NavBar/ScrollAwareNavBar/ScrollAwareNavBar";

const HomePage = () => {
  const navigate = useNavigate();
  const { modal } = useParams();
  const { showIntro, handleShowIntro, handleCloseIntro } =
    useContext(PortfolioContext);

  useEffect(() => {
    if (modal === "que-suis-je") {
      handleShowIntro();
    }
    // Pour faire défiler jusqu'à "mes réalisations"
    else if (modal === "mes-realisations") {
      const section = document.getElementById("mes-realisations");
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [modal, handleShowIntro]);

  // Nouvelle fonction pour gérer la fermeture de la modale
  const handleCloseAndNavigate = () => {
    handleCloseIntro();
    navigate("/"); // retour à la racine
  };

  return (
    <div>
      <ScrollAwareNavBar onAboutClick={handleShowIntro} />
      <Slider />

      {showIntro && <Introduction onClose={handleCloseAndNavigate} />}
      <Specialties />
      <SoftSkillWheel />
      {/* <ProjectsSection /> */}
      <div id="mes-realisations">
        <ProjectsSection />
      </div>
    </div>
  );
};

export default HomePage;
