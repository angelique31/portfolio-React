import {
  FormationContainer,
  Card,
  DateRange,
  Icon,
  FormationTitle,
} from "./EducationSection.styled";

function EducationSection() {
  return (
    <FormationContainer>
      <Card>
        <Icon />
        <DateRange>2022 - 2023</DateRange>
        <FormationTitle>
          Formation développeur d’application javascript-react
        </FormationTitle>
      </Card>
      <Card>
        <Icon />
        <DateRange>2004</DateRange>
        <FormationTitle>Diplôme d’Etat Infirmier</FormationTitle>
      </Card>
      <Card>
        <Icon />
        <DateRange>1999</DateRange>
        <FormationTitle>
          Baccalauréat SMS (Sciences Médico-Sociales)
        </FormationTitle>
      </Card>
    </FormationContainer>
  );
}

export default EducationSection;
