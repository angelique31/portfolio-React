import {
  Skill,
  SkillContainer,
  Tooltip,
  TooltipText,
} from "./SkillTooltip.styled";
import PropTypes from "prop-types";
import UseIsMobile from "../UseIsMobile/UseIsMobile";

function SkillTooltip({
  skill,
  description,
  isActive,
  onActivate,
  onDeactivate,
}) {
  //Gestion de l'apparition du tooltip au hover format desktop et au clic format mobile
  const isMobile = UseIsMobile();
  const handleTooltipClick = () => {
    if (isMobile) {
      if (isActive) {
        onDeactivate();
      } else {
        onActivate();
      }
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      onActivate();
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      onDeactivate();
    }
  };

  return (
    <Tooltip
      onClick={handleTooltipClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SkillContainer>
        <Skill>{skill}</Skill>
      </SkillContainer>
      <TooltipText $isVisible={isActive}>{description}</TooltipText>
    </Tooltip>
  );
}

SkillTooltip.propTypes = {
  skill: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onActivate: PropTypes.func.isRequired,
  onDeactivate: PropTypes.func.isRequired,
};

export default SkillTooltip;
