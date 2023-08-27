import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const CategoryContainer = styled.div`
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const CategoryTitle = styled.h3`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

// export const Icon = styled.img`
//   width: 24px;
//   height: 24px;
//   margin-right: 10px;
// `;

export const Skill = styled.span`
  display: inline-block;
  margin: 5px;
`;
