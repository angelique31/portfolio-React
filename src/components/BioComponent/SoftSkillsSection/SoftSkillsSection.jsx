import { useState } from "react";
import { useTranslation } from "react-i18next";
import SkillsTooltip from "../SkillsTooltip/SkillsTooltip";
import { SkillWrapper } from "./SoftSkillsSection.styled";
import VisibilityAwareContainer from "../../../pages/ProjectsDetailPage/VisibilityAwareContainer";

function SoftSkillsSection() {
  const { t } = useTranslation();
  const [activeTooltip, setActiveTooltip] = useState(null);

  const skillsData = Object.keys(t("skillsData", { returnObjects: true })).map(
    (key) => {
      return {
        skill: t(`skillsData.${key}.skill`),
        description: t(`skillsData.${key}.description`),
      };
    }
  );

  return (
    <VisibilityAwareContainer>
      <SkillWrapper>
        {skillsData.map((skillData, index) => (
          <SkillsTooltip
            key={skillData.skill}
            skill={skillData.skill}
            description={skillData.description}
            isActive={activeTooltip === index}
            onActivate={() => setActiveTooltip(index)}
            onDeactivate={() => setActiveTooltip(null)}
          />
        ))}
      </SkillWrapper>
    </VisibilityAwareContainer>
  );
}

export default SoftSkillsSection;
