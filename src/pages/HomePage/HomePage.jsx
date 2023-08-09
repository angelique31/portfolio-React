import { useState } from "react";
import NavBarColor from "../../components/NavBar/NavBarColor/NavBarColor";
import Slider from "../../components/Slider/Slider";
import Introduction from "../../components/Introduction/Introduction";
import Specialties from "../../components/Specialities/Specialities";
import SoftSkillWheel from "../../components/SoftSkillWheel/SoftSkillWheel";

const HomePage = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleCloseIntro = () => {
    setShowIntro(false);
  };
  return (
    <div>
      <NavBarColor />
      <Slider />
      {showIntro && <Introduction onClose={handleCloseIntro} />}
      <Specialties />
      <SoftSkillWheel />
      <Specialties />
    </div>
  );
};

export default HomePage;
