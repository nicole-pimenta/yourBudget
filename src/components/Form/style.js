import styled from "styled-components";

export const StyledContainerForm = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 355px;
    border: 1px solid #00000033;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;

    button {
      height: 48px;
      width: 95%;
      border-radius: 8px;
      padding: 13px 20px 13px 20px;
      background: var(--color-primary);
      border: 2px solid #fd377e;
      color: var(--color-grey-2);
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      text-align: center;
      margin: 10px auto;
    }

    button:hover {
      background: var(--color-primary-2);
    }

    select {
      height: 53px;
      width: 95%;
      border-radius: 8px;
      padding: 0px 16px 0px 16px;
      border: 2px solid #f8f9fa;
      background: var(--color-grey-2);
      color: var(--color-grey-3);
      cursor: pointer;

      margin-top: 10px;
    }
  }

  @media (min-width: 1024px) {
    height: 65vh;

    form {
      width: 100%;
      gap: 1rem;
      padding: 20px;

      select,
      button {
        width: 314px;
        height: 48px;
      }
    }
  }
`;

export const StyledMessageError = styled.span`
  font-family: Nunito;
  font-size: var(--text-2);
  font-weight: 400;
  line-height: 22px;
  color: var(--color-secondary);
  width: 80%;
`;
