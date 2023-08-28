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

function ProfessionalExperience() {
  return (
    <TimelineContainer>
      <Arrow />
      <Event side="left">
        <Dot />
        <EventDetails>
          <Position>{`Missions d'intérim`}</Position>
          <Institution>Laboratoire Biolab, Clinique Pasteur</Institution>
          <Duration>2015 – 2022</Duration>
          <Description>Localisation : Toulouse</Description>
        </EventDetails>
      </Event>

      <Event side="right">
        <Dot />
        <EventDetails>
          <Position>Missions en intérim au CHU</Position>
          <Duration>2010 – 2015</Duration>
          <Description>Localisation : Toulouse</Description>
        </EventDetails>
      </Event>

      <Event side="left">
        <Dot />
        <EventDetails>
          <Position>Chirurgie générale</Position>
          <Institution>Hôpital Saint Louis</Institution>
          <Duration>2004 – 2010</Duration>
          <Description>Localisation : Paris</Description>
        </EventDetails>
      </Event>
    </TimelineContainer>
  );
}

export default ProfessionalExperience;
