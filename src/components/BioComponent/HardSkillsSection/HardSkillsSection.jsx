import { useTranslation } from "react-i18next";
import {
  SkillsContainer,
  CategoryContainer,
  CategoryTitle,
  Skill,
  SkillLink,
} from "./HardSkillsSection.styled";

import VisibilityAwareContainer from "../../../pages/ProjectsDetailPage/VisibilityAwareContainer";

function HardSkillsSection() {
  const { t } = useTranslation();

  //Le paramètre returnObjects: true permet de récupérer l'objet hardSkillsData tel quel à partir du fichier de traduction.
  const hardSkillsData = t("hardSkillsData", { returnObjects: true });

  return (
    <VisibilityAwareContainer>
      <SkillsContainer>
        {Object.keys(hardSkillsData).map((key) => {
          const { category, skills } = hardSkillsData[key];
          return (
            <CategoryContainer key={key}>
              <CategoryTitle>{category}</CategoryTitle>
              {skills.map((skill, index) => (
                <Skill key={index}>
                  <SkillLink
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {skill.name}
                  </SkillLink>
                </Skill>
              ))}
            </CategoryContainer>
          );
        })}
      </SkillsContainer>
    </VisibilityAwareContainer>
  );
}

export default HardSkillsSection;
