import { useContext } from "react";
import PortfolioContext from "../../context/portfolioContext";
import SkillSection from "../../components/BioComponent/SkillSection/SkillSection";
import ScrollAwareNavBar from "../../components/NavBar/ScrollAwareNavBar/ScrollAwareNavBar";
import {
  BioContainer,
  StyledH1,
  BioDescription,
  SectionTitle,
} from "./BioPage.styled";

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
          <SkillSection />
        </section>
        <section>
          <h2>Hard skills</h2>
          <ul>
            {["HTML", "CSS", "Javascript", "React", "Sass"].map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>EXPERIENCES PROFESSIONNELLES</h2>
          <ul>
            <li>
              2015 – 2022 : Missions d’intérim au Laboratoire Biolab, Clinique
              Pasteur à Toulouse.
            </li>
            <li>2010 – 2015 : Missions en intérim en EHPAD et au CHU.</li>
            <li>
              2004 – 2010 : Chirurgie générale, Hôpital Saint Louis à Paris.
            </li>
          </ul>
        </section>

        <section>
          <h2>FORMATIONS</h2>
          <ul>
            <li>
              2022 - 2023 : Formation développeur d’application javascript-react
            </li>
            <li>2004 : Diplôme d’Etat Infirmier</li>
            <li>1999 : Baccalauréat SMS (Sciences Médico-Sociales)</li>
          </ul>
        </section>

        <section>
          <h2>CENTRES D’INTÉRÊT</h2>
          <ul>
            {["Cuisine", "Lecture", "Randonnée"].map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </section>
        <div className="download-section">
          <a href="/CV_Angelique_Rosin.pdf" download className="download-btn">
            Télécharger le CV
          </a>
        </div>
      </BioContainer>
    </>
  );
}

export default BioPage;
