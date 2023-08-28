import styled from "styled-components";

// Container pour la section "Formations"
export const FormationContainer = styled.div`
  margin: 50px 0;
`;

// Carte pour chaque formation
export const Card = styled.div`
  background-color: rgb(49, 53, 82);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 15px 20px;
  margin-bottom: 20px;
`;

// Plage de dates pour chaque formation
export const DateRange = styled.span`
  font-size: 0.9rem;
  color: rgb(209, 213, 219);
  margin-right: 20px;
`;

// Icône ou cercle à côté de chaque date (si vous voulez l'utiliser)
export const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-color: #e5a048;
  border-radius: 50%;
  margin-right: 15px;
  flex-shrink: 0; /* Empêche l'icône de réduire sa taille en cas de flex-wrap */
`;

// Titre de la formation (ex: "Formation développeur d’application javascript-react")
export const FormationTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;
