import { useTranslation, Trans } from "react-i18next";

import {
  Container,
  Title,
  FlexContainer,
  BioText,
  Highlighted,
  SkillTab,
  SkillText,
  SunWrapper,
  RotateContainer,
  CenterCircle,
} from "./SoftSkillWheel.styled";

import UseVisibilityEffect from "../ScrollAwareComponents/UseVisibilityEffect";

function SoftSkillWheel() {
  const skills = [
    "Empathie",
    "Adaptabilité",
    "Réceptivité aux feedbacks",
    "Travail d'équipe",
    "Communication",
    "Organisation",
    "Attention aux détails",
  ];

  const colors = [
    "#FFADAD",
    "#FFD6A5",
    "#FDFFB6",
    "#CAFFBF",
    "#9BF6FF",
    "#A0C4FF",
    "#BDB2FF",
    "#FFC6FF",
  ];

  const step = 360 / skills.length; // détermine l'angle entre chaque languette
  const containerRef = UseVisibilityEffect();
  const { t } = useTranslation();

  return (
    <Container id="softSkillsSection" ref={containerRef}>
      <Title>{t("homepage.comp_transverses")}</Title>
      <FlexContainer>
        <BioText>
          <Trans
            i18nKey="homepage.bio"
            components={{ Highlight: <Highlighted /> }}
          >
            Après avoir exercé le métier{" "}
            <Highlighted>
              d{`'`}
              infirmière
            </Highlighted>{" "}
            pendant 20 ans, j{`'`}ai appris la valeur du{" "}
            <Highlighted>travail en équipe</Highlighted>. Cette expérience m
            {`'`}
            aide énormément en développement web. Ma{" "}
            <Highlighted>rigueur</Highlighted> et mon sens de{" "}
            <Highlighted>
              l{`'`}
              écoute
            </Highlighted>
            , acquis dans le monde médical, me guident dans chaque projet. Je
            sais combien il est important de collaborer et de comprendre les
            besoins des autres, que ce soit des patients ou des{" "}
            <Highlighted>utilisateurs</Highlighted> d{`'`}un site web. Chaque
            ligne de code que je rédige reflète cette approche centrée sur{" "}
            <Highlighted>
              l{`'`}
              humain
            </Highlighted>
            .
          </Trans>
        </BioText>
        <SunWrapper>
          <RotateContainer>
            {skills.map((skill, index) => (
              <SkillTab
                key={skill}
                color={colors[index % colors.length]}
                $rotation={step * index}
              >
                <SkillText>{t(`homepage.skills.${index}`)}</SkillText>
              </SkillTab>
            ))}
            <CenterCircle />
          </RotateContainer>
        </SunWrapper>
      </FlexContainer>
    </Container>
  );
}

export default SoftSkillWheel;
