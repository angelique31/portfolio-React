import { useContext } from "react";
import PortfolioContext from "../../context/portfolioContext";

import ScrollAwareNavBar from "../../components/NavBar/ScrollAwareNavBar/ScrollAwareNavBar";
import {
  BioContainer,
  StyledH1,
  BioDescription,
  SectionTitle,
} from "./BioPage.styled";
import SoftSkillsSection from "../../components/BioComponent/SoftSkillsSection/SoftSkillsSection";
import HardSkillsSection from "../../components/BioComponent/HardSkillsSection/HardSkillsSection";
import ProfessionalExperience from "../../components/BioComponent/ProfessionalExperience/ProfessionalExperience";
import EducationSection from "../../components/BioComponent/EducationSection/EducationSection";
import Hobbies from "../../components/BioComponent/Hobbies/Hobbies";

function BioPage() {
  const { handleShowIntro } = useContext(PortfolioContext);
  return (
    <>
      <ScrollAwareNavBar onAboutClick={handleShowIntro} />
      <BioContainer>
        <header>
          <StyledH1>{`Développeuse d'application Javascript React`}</StyledH1>
          <BioDescription>
            {`Après une carrière enrichissante en tant qu'infirmière, je me suis reconvertie dans le développement web. Ultra motivée, je suis prête à relever de nouveaux défis dans ce domaine passionnant.
          `}
          </BioDescription>
        </header>

        <section>
          <SectionTitle>Mes soft skills</SectionTitle>
          <SoftSkillsSection />
        </section>

        <section>
          <SectionTitle>Mes compétences techniques</SectionTitle>
          <HardSkillsSection />
        </section>

        <section>
          <SectionTitle>Mon parcours professionnel</SectionTitle>
          <ProfessionalExperience />
        </section>

        <section>
          <SectionTitle>Formations et qualifications</SectionTitle>
          <EducationSection />
        </section>

        <section>
          <SectionTitle>{`Centres d'intérêts`}</SectionTitle>
          <Hobbies />
        </section>
      </BioContainer>
    </>
  );
}

export default BioPage;
