import styled from "styled-components";

export const FlexColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const ErrorText = styled.div`
  color: #ff7a7a;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  font-style: italic;
  margin-left: 8px;
  @media (max-width: 527px) {
    font-size: 0.6rem;
  }
`;
