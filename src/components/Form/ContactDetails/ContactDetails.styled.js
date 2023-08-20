import styled from "styled-components";

export const Aside = styled.aside`
  margin-left: 81px;

  a {
    color: #daddee;

    &:hover {
      color: #ffb957;
    }
  }

  p {
    font-size: 1.2rem;
    color: #daddee;
    font-family: inherit;
  }

  h4 {
    font-size: 1.3rem;
    font-weight: 500;
    font-family: inherit;
    color: rgb(0 0 0 / 60%);
  }
  @media (max-width: 1050px) {
    margin-left: 0;
  }
`;

export const ContactInfoBox = styled.div`
  margin-top: 50px;
`;

export const Box = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const LogoImage = styled.img`
  margin-right: 20px;
`;

export const AddressText = styled.p`
  width: 100%;
  color: #daddee;
`;
