// SkillsSection.js
import { useState } from "react";
import skillsData from "../../../datas/skillsData";
import SkillTooltip from "../SkillTooltip/SkillTooltip";
import { SkillWrapper } from "./SkillSection.styled";

function SkillSection() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  return (
    <SkillWrapper>
      {skillsData.map((skillData, index) => (
        <SkillTooltip
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

export default SkillSection;
