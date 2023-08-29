import { useTranslation } from "react-i18next";
import {
  SkillsContainer,
  CategoryContainer,
  CategoryTitle,
  Skill,
} from "./HardSkillsSection.styled";

function HardSkillsSection() {
  const { t } = useTranslation();

  //Le paramètre returnObjects: true permet de récupérer l'objet hardSkillsData tel quel à partir du fichier de traduction.
  const hardSkillsData = t("hardSkillsData", { returnObjects: true });

  return (
    <SkillsContainer>
      {Object.keys(hardSkillsData).map((key) => {
        const { category, skills } = hardSkillsData[key];
        return (
          <CategoryContainer key={key}>
            <CategoryTitle>{category}</CategoryTitle>
            {skills.map((skill, index) => (
              <Skill key={index}>{skill}</Skill>
            ))}
          </CategoryContainer>
        );
      })}
    </SkillsContainer>
  );
}

export default HardSkillsSection;