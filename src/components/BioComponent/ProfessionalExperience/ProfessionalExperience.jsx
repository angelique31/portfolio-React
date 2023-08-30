import { useTranslation } from "react-i18next";
import {
  TimelineContainer,
  Event,
  Dot,
  EventDetails,
  Position,
  Institution,
  Duration,
  Description,
  Arrow,
} from "./ProfessionalExperience.styled";
import VisibilityAwareContainer from "../../../pages/ProjectsDetailPage/VisibilityAwareContainer";

function ProfessionalExperience() {
  const { t } = useTranslation();

  const professionalExperienceData = t("professionalExperienceData", {
    returnObjects: true,
  });

  return (
    <VisibilityAwareContainer>
      <TimelineContainer>
        <Arrow />
        {professionalExperienceData.map(
          ({ position, institution, duration, location }, index) => (
            <Event $side={index % 2 === 0 ? "left" : "right"} key={index}>
              <Dot />
              <EventDetails>
                <Position>{position}</Position>
                {institution && <Institution>{institution}</Institution>}
                <Duration>{duration}</Duration>
                <Description>{location}</Description>
              </EventDetails>
            </Event>
          )
        )}
      </TimelineContainer>
    </VisibilityAwareContainer>
  );
}

export default ProfessionalExperience;
