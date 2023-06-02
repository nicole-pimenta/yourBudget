import { StyledSpan, StyledText2 } from "../../styles/typography";
import {
  StyledCard,
  StyledValueSection,
  StyledValueDescription,
} from "./style";

const Card = ({ itemTransaction, setListTransactions, listTransactions }) => {
  const handleDeleteCard = (cardId) => {
    const filteredList = listTransactions.filter((item) => item.id !== cardId);

    setListTransactions(filteredList);
  };
  return (
    <>
      {itemTransaction.type === "entrada" ? (
        <StyledCard>
          <StyledValueDescription color="#CDDFD3">
            <StyledText2 color="#212529">
              {" "}
              {itemTransaction.description}{" "}
            </StyledText2>
            <StyledSpan> {itemTransaction.type}</StyledSpan>
          </StyledValueDescription>
          <StyledValueSection>
            <StyledSpan>
              {" "}
              R$ {Number(`${itemTransaction.value}`).toFixed(2)}
            </StyledSpan>
            <button onClick={() => handleDeleteCard(itemTransaction.id)}>
              excluir
            </button>
          </StyledValueSection>
        </StyledCard>
      ) : (
        <StyledCard color="#212529">
          <StyledValueDescription color="#ecde83">
            <StyledText2 color="#212529">
              {" "}
              {itemTransaction.description}{" "}
            </StyledText2>
            <StyledSpan> {itemTransaction.type}</StyledSpan>
          </StyledValueDescription>
          <StyledValueSection>
            <StyledSpan>
              {" "}
              R$ {Number(`${itemTransaction.value * -1}`).toFixed(2)}
            </StyledSpan>
            <button onClick={() => handleDeleteCard(itemTransaction.id)}>
              excluir
            </button>
          </StyledValueSection>
        </StyledCard>
      )}
    </>
  );
};

export default Card;
