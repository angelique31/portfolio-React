import "./CvPage.styled";

function CvPage() {
  return (
    <div className="cv-container">
      <header>
        <h1>Angélique Rosin</h1>
        <p>
          {`En reconversion professionnelle dans le développement web, mes compétences en tant
          qu'infirmière, telles que la rigueur, l’aisance relationnelle, la ténacité, seront des atouts précieux
          pour votre entreprise. Je suis ultra motivée, prête à relever de nouveaux défis.`}
        </p>
      </header>

      <section>
        <h2>Soft skills</h2>
        <ul>
          {[
            "Empathie",
            "Sens de l’organisation",
            "Capacité d’adaptation",
            "Ecoute",
            "Curiosité",
            "Autonomie",
            "Ténacité",
            "Aisance relationnelle",
          ].map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

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
    </div>
  );
}

export default CvPage;
