import { useState } from "react";
import skillsData from "../../../datas/skillsData";
import SkillsTooltip from "../SkillsTooltip/SkillsTooltip";
import { SkillWrapper } from "./SoftSkillsSection.styled";

function SoftSkillsSection() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  return (
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
  );
}

export default SoftSkillsSection;
