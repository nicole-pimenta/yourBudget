import styled from "styled-components";

export const StyledCard = styled.div`
  height: 156px;
  width: 351px;
  border-radius: 4px;

  border-left: 4px solid #03b898;
  border-color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: var(--color-grey-2);
  padding-left: 20px;

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin: 5px;

    width: 90%;
  }

  button {
    height: 19px;
    width: 48px;
    border-radius: 2px;
    background-color: var(--color-grey-2);
  }

  button:hover {
    background-color: var(--color-grey-3);
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    section {
      height: 100px;
      width: 100%;
    }

    button {
      width: 50%;
    }
  }
`;
