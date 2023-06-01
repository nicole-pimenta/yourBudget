import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    gap: 1rem;
  }

  @media (min-width: 1024px) {
    width: 70%;
    height: 90vh;
    flex-direction: row;
    justify-content: center;

    section {
      width: 50%;
      height: 60vh;
    }
  }
`;
