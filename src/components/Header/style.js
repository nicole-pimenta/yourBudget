import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 69px;
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;

  span {
    font-size: var(--title-2);
    font-weight: 600;
    line-height: 3.5rem;
    color: var(--color-primary);
  }
`;

export const ContainerHeader = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;
