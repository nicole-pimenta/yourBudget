import styled from "styled-components";

export const StyledTitle1 = styled.h1`
  font-size: var(--title-1);
  font-weight: 600;
  line-height: 4.5rem;
  color: var(--color-grey-4);
`;

export const StyledTitle2 = styled.h2`
  font-size: var(--title-2);
  font-weight: 600;
  line-height: 3.5rem;
  color: var(--color-grey-4);
`;

export const StyledTitle3 = styled.h3`
  font-size: var(--title-3);
  font-weight: 600;
  line-height: 3rem;
`;

export const StyledText1 = styled.p`
  font-size: var(--text-1);
  font-weight: 500;
  line-height: 2.5rem;
  color: var(--color-grey-1);
  text-align: center;
`;

export const StyledText2 = styled.p`
  font-family: Nunito;
  font-size: var(--title-3);
  font-weight: 700;
  line-height: 22px;
  color: ${(props) => props.color};
`;

export const StyledLabel = styled.label`
  font-family: Inter;
  font-size: var(--text-2);
  font-weight: 400;
  color: var(--color-grey-4);
  width: 100%;
  text-align: left;
`;

export const StyledSpan = styled.span`
  font-family: Nunito;
  font-size: var(--text-2);
  font-weight: 400;
  line-height: 22px;
  color: var(--color-grey-4);
`;
