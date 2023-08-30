// import {
//   FormationContainer,
//   Card,
//   DateRange,
//   Icon,
//   FormationTitle,
// } from "./EducationSection.styled";

// function EducationSection() {
//   return (
//     <FormationContainer>
//       <Card>
//         <Icon />
//         <DateRange>2022 - 2023</DateRange>
//         <FormationTitle>
//           Formation développeur d’application javascript-react
//         </FormationTitle>
//       </Card>
//       <Card>
//         <Icon />
//         <DateRange>2004</DateRange>
//         <FormationTitle>Diplôme d’Etat Infirmier</FormationTitle>
//       </Card>
//       <Card>
//         <Icon />
//         <DateRange>1999</DateRange>
//         <FormationTitle>
//           Baccalauréat SMS (Sciences Médico-Sociales)
//         </FormationTitle>
//       </Card>
//     </FormationContainer>
//   );
// }

// export default EducationSection;

import { useTranslation } from "react-i18next";
import {
  FormationContainer,
  Card,
  DateRange,
  Icon,
  FormationTitle,
} from "./EducationSection.styled";
import VisibilityAwareContainer from "../../../pages/ProjectsDetailPage/VisibilityAwareContainer";

function EducationSection() {
  const { t } = useTranslation();

  return (
    <VisibilityAwareContainer>
      <FormationContainer>
        {[1, 2, 3].map((cardNumber) => (
          <Card key={cardNumber}>
            <Icon />
            <DateRange>
              {t(`educationSection.card${cardNumber}.dateRange`)}
            </DateRange>
            <FormationTitle>
              {t(`educationSection.card${cardNumber}.title`)}
            </FormationTitle>
          </Card>
        ))}
      </FormationContainer>
    </VisibilityAwareContainer>
  );
}

export default EducationSection;
