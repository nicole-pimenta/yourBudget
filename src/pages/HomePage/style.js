import styled from "styled-components";

export const StyledHomePage = styled.div`
  position: relative;
  top: 20px;
  max-height: 800px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: blue;
    gap: 30px;
  }
`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  gap: 20px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const ListSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  gap: 20px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
