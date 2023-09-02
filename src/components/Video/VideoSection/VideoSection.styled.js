import styled from "styled-components";

export const VideoContainer = styled.div`
  padding: 2em;
  background-color: #f9f9f9; // Par exemple, utilisez une couleur de fond légère
  border-radius: 8px; // Coins arrondis pour un look moderne
  margin: 2em auto; // Centrer le conteneur
  max-width: 800px; // Limiter la largeur maximale
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); // Ombre subtile

  video {
    width: 100%; // Faire en sorte que la vidéo prenne toute la largeur du conteneur
    border-radius: 4px; // Coins arrondis sur la vidéo elle-même
  }
`;
