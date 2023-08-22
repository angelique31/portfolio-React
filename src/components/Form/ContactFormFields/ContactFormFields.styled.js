import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 990px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const FlexColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 100%;
  // width: calc(50% - 10px);
`;

export const ButtonAndDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 860px) {
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
  }
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
