import { StyledSpan, StyledText2 } from "../../styles/typography";
import { StyledCard } from "./style";

const Card = ({ itemTransaction, setListTransactions, listTransactions }) => {
  const handleDeleteCard = (cardId) => {
    const filteredList = listTransactions.filter((item) => item.id !== cardId);

    setListTransactions(filteredList);
  };
  return (
    <>
      {itemTransaction.type === "entrada" ? (
        <StyledCard>
          <section>
            <StyledText2 color="#212529">
              {" "}
              {itemTransaction.description}{" "}
            </StyledText2>
            <StyledSpan> {itemTransaction.type}</StyledSpan>
          </section>
          <section>
            <StyledSpan>
              {" "}
              R$ {Number(`${itemTransaction.value}`).toFixed(2)}
            </StyledSpan>
            <button onClick={() => handleDeleteCard(itemTransaction.id)}>
              excluir
            </button>
          </section>
        </StyledCard>
      ) : (
        <StyledCard color="#212529">
          <section>
            <StyledText2 color="#212529">
              {" "}
              {itemTransaction.description}{" "}
            </StyledText2>
            <StyledSpan> {itemTransaction.type}</StyledSpan>
          </section>
          <section>
            <StyledSpan>
              {" "}
              R$ {Number(`${itemTransaction.value * -1}`).toFixed(2)}
            </StyledSpan>
            <button onClick={() => handleDeleteCard(itemTransaction.id)}>
              excluir
            </button>
          </section>
        </StyledCard>
      )}
    </>
  );
};

export default Card;
