import SkillCard from "../SkillCard/SkillCard";
import skillsData from "../../../datas/skillsData";
import { SkillsContainer, SectionTitle } from "./SkillsSection.styled";

function SkillsSection() {
  return (
    <section>
      <SectionTitle>Soft skills</SectionTitle>
      <SkillsContainer>
        {skillsData.map((item) => (
          <SkillCard
            key={item.skill}
            skill={item.skill}
            description={item.description}
          />
        ))}
      </SkillsContainer>
    </section>
  );
}

export default SkillsSection;
