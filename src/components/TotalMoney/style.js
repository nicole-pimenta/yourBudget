import styled from "styled-components";

export const StyledContainerTotalMoney = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  border: 1px solid #00000033;

  width: 90%;
  height: 96px;
  margin: auto;
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    padding: 20px;
  }
`;
