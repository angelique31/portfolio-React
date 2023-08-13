import { useState } from "react";
// import NavBarColor from "../../components/NavBar/NavBarColor/NavBarColor";
import Slider from "../../components/Slider/Slider";
import Introduction from "../../components/Introduction/Introduction";
import Specialties from "../../components/Specialities/Specialities";
import SoftSkillWheel from "../../components/SoftSkillWheel/SoftSkillWheel";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import ScrollAwareNavBar from "../../components/NavBar/ScrollAwareNavBar/ScrollAwareNavBar";

const HomePage = () => {
  const [showIntro, setShowIntro] = useState(true);
  const handleShowIntro = () => {
    setShowIntro(true);
  };

  const handleCloseIntro = () => {
    setShowIntro(false);
  };
  return (
    <div>
      {/* <NavBarColor /> */}
      <ScrollAwareNavBar onAboutClick={handleShowIntro} />
      <Slider />
      {showIntro && <Introduction onClose={handleCloseIntro} />}
      <Specialties />
      <SoftSkillWheel />
      <ProjectsSection />
    </div>
  );
};

export default HomePage;
