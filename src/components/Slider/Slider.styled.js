import styled from "styled-components";

export const BackgroundImage = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  height: 100vh;
  position: relative;
`;

export const ImageSlider = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.5s;

  &.active {
    opacity: 1;
  }
`;
