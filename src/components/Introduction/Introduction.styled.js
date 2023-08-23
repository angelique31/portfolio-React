import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const IntroContainer = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);

  animation: ${fadeIn} 2s ease-in-out;
  border: 2px solid #dfe0dc;
  padding: 20px;
  border-radius: 15px;
  background-color: rgb(78, 76, 76);
  width: 67%;
  // opacity: 0.9;
  display: flex;
  align-items: center;
  @media (max-width: 700px) {
    display: block;
  }
`;

export const CloseIcon = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
  color: white;
  cursor: pointer;
`;

export const IntroImage = styled.img`
  width: 300px;
  transition: opacity 0.5s ease-in-out;
  @media (max-width: 900px) {
    width: 200px;
  }
`;

export const IntroTitle = styled.span`
  color: #fff;
  font-size: 1.5rem;
  text-align: left;
  @media (max-width: 664px) {
    display: block;
    width: 80%;
  }
`;

export const IntroHighlight = styled.span`
  // color: #e93de6;
  color: #ffb957;
  font-weight: 100;
`;

export const NameSpan = styled.span``;
export const IntroSubtitle = styled.div`
  color: #fff;
  font-size: 1.2rem;
  padding: 20px 0px 10px 0px;
`;

export const IntroDescription = styled.div`
  color: #fff;
  font-size: 1rem;
  font-style: italic;
`;

export const MoreAboutMeButton = styled.button`
  display: inline-block;
  padding: 0.5em 1em;
  border-radius: 5px;
  border: 1px solid rgb(255, 185, 87);
  color: rgb(255, 197, 118);
  font-size: 0.9rem;
  cursor: pointer;
  transition: box-shadow 0.2s ease 0s;
  box-shadow: rgba(255, 185, 87, 0.6) 0px 0px 10px;
  background: rgb(49, 53, 82);
  margin-top: 40px;
  margin-left: 30px;
  &:hover {
    background-color: rgb(255, 185, 87);
    color: rgb(49, 53, 82);
    box-shadow: rgba(255, 185, 87, 0.8) 2px 1px 0px;
  }
  @media (max-width: 700px) {
    margin-left: 0px;
  }
`;
