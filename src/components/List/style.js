import styled from "styled-components";

export const StyledContainerList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  width: 355px;

  ul {
    height: 350px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;

    @media (min-width: 1024px) {
      max-height: 70vh;
      width: 100%;
    }
  }
`;
