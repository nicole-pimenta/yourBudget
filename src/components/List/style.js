import styled from "styled-components";

export const StyledContainerList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  width: 100%;

  max-width: 560px;
  height: 520px;
  max-height: 800px;

  ul {
    height: 95%;
    width: 95%;
    margin: 0 auto;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }
`;
