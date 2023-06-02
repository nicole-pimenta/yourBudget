import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  max-width: 355px;
  height: 434px;
  padding: 20px;
  border: 1px solid #00000033;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  button {
    height: 48px;
    width: 100%;
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
  }

  button:hover {
    background: var(--color-primary-2);
  }

  select {
    height: 53px;
    width: 100%;
    border-radius: 8px;
    padding: 0px 16px 0px 16px;
    border: 2px solid #f8f9fa;
    background: var(--color-grey-2);
    color: var(--color-grey-3);
    cursor: pointer;

    @media (max-width: 800px) {
      height: 48px;
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

  @media (max-width: 700px) {
    width: 100%;
  }
`;
