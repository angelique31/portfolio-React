import { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PortfolioContext from "../../context/portfolioContext";
import Slider from "../../components/Slider/Slider";
import Introduction from "../../components/Introduction/Introduction";
import Specialties from "../../components/Specialities/Specialities";
import SoftSkillWheel from "../../components/SoftSkillWheel/SoftSkillWheel";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import ScrollAwareNavBar from "../../components/NavBar/ScrollAwareNavBar/ScrollAwareNavBar";
import ContactForm from "../../components/Form/ContactForm/ContactForm";

const HomePage = () => {
  const navigate = useNavigate();
  const { modal } = useParams();
  const { showIntro, handleShowIntro, handleCloseIntro } =
    useContext(PortfolioContext);

  //Etat pour gérer la navigation dans les sections de la page home
  useEffect(() => {
    if (modal === "que-suis-je") {
      handleShowIntro();
    }
  }, [modal, handleShowIntro]);

  useEffect(() => {
    if (window.location.hash === "#mes-realisations") {
      const section = document.getElementById("mes-realisations");
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [modal]);

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
      <ContactForm />
      <Specialties />
      <SoftSkillWheel />
      <div id="mes-realisations">
        <ProjectsSection />
        <ContactForm />
      </div>
    </div>
  );
};

export default HomePage;
