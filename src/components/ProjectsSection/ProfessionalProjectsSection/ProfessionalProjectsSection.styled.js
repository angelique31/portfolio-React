import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import ExternalLinkIcon from "../../ExternalLinkIcon/ExternalLinkIcon";

const fadeInTitle = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const Title = styled.h2`
  .visible & {
    animation: ${fadeInTitle} 1s forwards;
  }
  color: #ffb957;
  text-align: center;
  margin-bottom: 60px;
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #d1d5db;
  text-align: center;
  margin: 0 0 60px 0;
  font-style: italic;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8em;
`;

export const PlayIconStyled = styled.img`
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 28px;
  opacity: 0.8;
  animation: ${pulse} 3s infinite;
`;

export const ProjectsContainer = styled.section`
  padding: 5em 0;
  background-color: rgb(31, 34, 53);
`;

//withConfig et shouldForwardProp, pour que la prop delayIndex ne soit pas transmise au DOM
export const ProjectCard = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "delayIndex",
})`
  margin: 2em;
  width: 400px;
  height: 462px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 5px;
  opacity: 0;
  .visible & {
    animation: ${fadeIn} 1s forwards 0.5s;
    animation-delay: ${(props) => 0.5 + props.delayIndex * 0.4}s;
  }
  @media (max-width: 446px) {
    height: 429px;
  }
`;

export const ProjectImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-height: 250px;
  overflow: hidden;

  padding: 3px;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s;
  border-radius: 5px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ProjectInfoWrapper = styled.div`
  background: #313552;
  padding: 1em;
  margin-top: 3px;
`;

export const ProjectTechnologies = styled.div`
  margin: 1em 0;
  color: #ffb957;
  font-size: 0.9rem;
`;

export const ProjectTitle = styled.h3`
  margin-top: 1em;
  color: white;
  opacity: 0.9;
`;

export const ProjectDescription = styled.p`
  color: #d1d5db;
  margin: 1em 0;
  font-size: 0.8rem;
  line-height: 1.5;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.5em 1em;
  border-radius: 5px;
  border: 1px solid #ffb957;
  color: #ffc576;
  font-size: 0.9rem;
  cursor: pointer;

  transition: box-shadow 0.2s;
  box-shadow: 0 0 10px rgba(255, 185, 87, 0.6);
  &:hover {
    background-color: #ffb957;
    color: #313552;
    box-shadow: 2px 1px 0px rgba(255, 185, 87, 0.8);
  }
  &:active {
    transform: scale(0.95);
    box-shadow: 0px 1px 7px rgba(255, 185, 87, 0.6);
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 40px;
  border-radius: 50%;
  opacity: 0.3;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    opacity: 1;
    color: white;
    transform: scale(1.1);
    // box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
  }
`;

export const StyledExternalIcon = styled(ExternalLinkIcon)`
  width: 18px;
  height: 18px;

  color: #d1d5db;
  transition: color 0.3s, transform 0.3s, opacity 0.3s, box-shadow 0.3s;

  &:hover {
    opacity: 1;
    color: white;
    transform: scale(1.15);
    // box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
  }
`;
