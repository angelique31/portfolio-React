import { useContext } from "react";
import { useTranslation } from "react-i18next";
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
import VisibilityAwareContainer from "../../pages/ProjectsDetailPage/VisibilityAwareContainer";

function BioPage() {
  const { handleShowIntro } = useContext(PortfolioContext);
  const { t } = useTranslation();

  return (
    <>
      <ScrollAwareNavBar onAboutClick={handleShowIntro} />

      <BioContainer>
        <header>
          <StyledH1>{t("bioPage.header.h1")}</StyledH1>
          <VisibilityAwareContainer>
            <BioDescription>
              {t("bioPage.header.bioDescription")}
            </BioDescription>
          </VisibilityAwareContainer>
        </header>

        <section>
          <SectionTitle>{t("bioPage.sectionTitles.softSkills")}</SectionTitle>
          <SoftSkillsSection />
        </section>

        <section>
          <SectionTitle>{t("bioPage.sectionTitles.hardSkills")}</SectionTitle>
          <HardSkillsSection />
        </section>

        <section>
          <SectionTitle>
            {t("bioPage.sectionTitles.professionalExperience")}
          </SectionTitle>
          <ProfessionalExperience />
        </section>

        <section>
          <SectionTitle>{t("bioPage.sectionTitles.education")}</SectionTitle>
          <EducationSection />
        </section>

        <section>
          <SectionTitle>{t("bioPage.sectionTitles.hobbies")}</SectionTitle>
          <Hobbies />
        </section>
      </BioContainer>
    </>
  );
}

export default BioPage;
