import styled from "styled-components";

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    height: 53px;
    width: 95%;
    margin: 0 auto;
    border-radius: 8px;
    padding: 0px 16px 0px 16px;
    border: 2px solid #f8f9fa;
    background: var(--color-grey-2);
    color: var(--color-grey-3);
  }

  @media (min-width: 1024px) {
    input {
      width: 314px;
      height: 48px;
    }
  }
`;
