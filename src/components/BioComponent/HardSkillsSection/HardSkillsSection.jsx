import {
  SkillsContainer,
  CategoryContainer,
  CategoryTitle,
  Skill,
} from "./HardSkillsSection.styled";

function HardSkillsSection() {
  return (
    <SkillsContainer>
      <CategoryContainer>
        <CategoryTitle>
          {/* <Icon src={JsLogo} /> */}
          Langages de Programmation :
        </CategoryTitle>
        <Skill>- JavaScript</Skill>
        <Skill>- HTML</Skill>
        <Skill>- CSS</Skill>
      </CategoryContainer>

      <CategoryContainer>
        <CategoryTitle>Bibliothèques / Frameworks :</CategoryTitle>
        <Skill>- React.js</Skill>
        <Skill>- Redux</Skill>
        <Skill>- Context API</Skill>
      </CategoryContainer>

      <CategoryContainer>
        <CategoryTitle>
          {/* <Icon src={ReactLogo} /> */}
          Préprocesseurs & CSS-in-JS :
        </CategoryTitle>
        <Skill>- Styled Components</Skill>
        <Skill>- Sass</Skill>
      </CategoryContainer>

      <CategoryContainer>
        <CategoryTitle>
          {/* <Icon src={ReactLogo} /> */}
          Outils et Environnements :
        </CategoryTitle>
        <Skill>- Git & GitHub</Skill>
        <Skill>- Webpack</Skill>
        <Skill>- Babel</Skill>
        <Skill>- npm</Skill>
        <Skill>- Visual Studio Code </Skill>
      </CategoryContainer>

      <CategoryContainer>
        <CategoryTitle>
          {/* <Icon src={ReactLogo} /> */}
          Outils de test :
        </CategoryTitle>
        <Skill>- {`Jest ( tests unitaires et d'intégration)`}</Skill>
        <Skill>- Vitest (pour le testing des applications avec Vite)</Skill>
      </CategoryContainer>

      <CategoryContainer>
        <CategoryTitle>
          {/* <Icon src={ReactLogo} /> */}
          Autres Compétences Techniques :
        </CategoryTitle>
        <Skill>- Responsive Web Design</Skill>
        <Skill>- Web Accessibility</Skill>
      </CategoryContainer>

      <CategoryContainer>
        <CategoryTitle>
          {/* <Icon src={ReactLogo} /> */}
          Méthodologies :
        </CategoryTitle>
        <Skill>- Agile & Scrum</Skill>
        <Skill>- Kanban</Skill>
      </CategoryContainer>

      <CategoryContainer>
        <CategoryTitle>
          {/* <Icon src={ReactLogo} /> */}
          Outils et Environnements :
        </CategoryTitle>
        <Skill>- Git & GitHub</Skill>
        <Skill>- Webpack</Skill>
        <Skill>- Babel</Skill>
        <Skill>- npm</Skill>
        <Skill>- Visual Studio Code </Skill>
      </CategoryContainer>

      <CategoryContainer>
        <CategoryTitle>
          {/* <Icon src={ReactLogo} /> */}
          Modèles de Langage et IA :
        </CategoryTitle>
        <Skill>- ChatGPT</Skill>
        <Skill>- Midjourney (notions)</Skill>
      </CategoryContainer>
    </SkillsContainer>
  );
}

export default HardSkillsSection;
