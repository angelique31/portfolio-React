import {
  Container,
  Title,
  FlexContainer,
  BioText,
  SkillTab,
  SkillText,
  SunWrapper,
  RotateContainer,
  CenterCircle,
} from "./SoftSkillWheel.styled";

function SoftSkillWheel() {
  const skills = [
    "Empathie",
    "Adaptabilité",
    "Réceptivité aux feedbacks",
    "Travail d'équipe",
    "Communication",
    "Organisation",
    "Attention aux détails",
  ];

  const colors = [
    "#FFADAD",
    "#FFD6A5",
    "#FDFFB6",
    "#CAFFBF",
    "#9BF6FF",
    "#A0C4FF",
    "#BDB2FF",
    "#FFC6FF",
  ];

  const step = 360 / skills.length; // cela déterminera l'angle entre chaque languette

  return (
    <Container>
      <Title>Compétences transverses</Title>
      <FlexContainer>
        <BioText>
          {`Après avoir exercé le métier d'infirmière pendant 20 ans, j'ai développé des compétences essentielles qui me sont aujourd'hui bénéfiques 
        en développement web. 
        Ma rigueur, mon anticipation et ma capacité à aborder des situations délicates se reflètent dans chacun de mes projets. 
        Malgré les différences entre la médecine et la programmation, la nécessité d'une écoute active reste la même. 
        Chaque ligne de code que j'écris est informée par cette attention aux détails et cette focalisation sur l'utilisateur, 
        rendant chaque projet techniquement robuste et axé sur l'expérience humaine.`}
        </BioText>
        <SunWrapper>
          <RotateContainer>
            {skills.map((skill, index) => (
              <SkillTab
                key={skill}
                color={colors[index % colors.length]}
                rotation={step * index}
              >
                <SkillText>{skill}</SkillText>
              </SkillTab>
            ))}
            <CenterCircle />
          </RotateContainer>
        </SunWrapper>
      </FlexContainer>
    </Container>
  );
}

export default SoftSkillWheel;
