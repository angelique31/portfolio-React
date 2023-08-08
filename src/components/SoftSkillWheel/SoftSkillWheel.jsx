// import { WheelWrapper, SkillTab } from "./SoftSkillWheel.styled";

// function SoftSkillWheel() {
//   const skills = [
//     { name: "Empathie", angle: 0 },
//     { name: "Adaptabilité", angle: 45 },
//     { name: "Réceptivité aux feedbacks", angle: 90 },
//     { name: "Travail d'équipe", angle: 135 },
//     { name: "Communication", angle: 180 },
//     { name: "Gestion du temps et organisation", angle: 225 },
//     { name: "Attention aux détails", angle: 270 },
//     // Ajoutez plus si besoin
//   ];

//   return (
//     <WheelWrapper>
//       {skills.map((skill) => (
//         <SkillTab
//           key={skill.name}
//           style={{
//             transform: `rotate(${skill.angle}deg)`,
//             left: `${50 + 60 * Math.cos((skill.angle * Math.PI) / 180)}%`,
//             top: `${50 + 60 * Math.sin((skill.angle * Math.PI) / 180)}%`,
//           }}
//         >
//           {skill.name}
//         </SkillTab>
//       ))}
//     </WheelWrapper>
//   );
// }

// export default SoftSkillWheel;

import {
  RotationWrapper,
  WheelWrapper,
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

  //   return (
  //     <RotationWrapper>
  //       <WheelWrapper>
  //         <RotateContainer>
  //           {skills.map((skill, index) => (
  //             <SkillTab
  //               key={skill}
  //               color={colors[index % colors.length]}
  //               style={{
  //                 transform: `rotate(${step * index}deg)`,
  //               }}
  //             >
  //               <SkillText>{skill}</SkillText>
  //             </SkillTab>
  //           ))}
  //         </RotateContainer>
  //         <CenterCircle />
  //       </WheelWrapper>
  //     </RotationWrapper>
  //   );

  return (
    <WheelWrapper>
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
    </WheelWrapper>
  );
}

export default SoftSkillWheel;
