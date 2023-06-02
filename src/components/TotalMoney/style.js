import styled from "styled-components";

export const StyledContainerTotalMoney = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  border: 1px solid #00000033;
  width: 90%;
  max-height: 70px;

  @media (max-width: 800px) {
    width: 100%;
  }

  div {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
