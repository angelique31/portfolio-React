import {
  // WheelWrapper,
  SkillTab,
  SkillText,
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
    // <WheelWrapper>
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
    // </WheelWrapper>
  );
}

export default SoftSkillWheel;
