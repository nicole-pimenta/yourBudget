import { StyledSpan, StyledText2 } from "../../styles/typography";
import { StyledContainerTotalMoney } from "./style";

const TotalMoney = ({ listTransactions }) => {
  const total = listTransactions.reduce((acc, curr) => {
    if (curr.type === "saida") {
      return acc + Number(curr.value) * -1;
    }

    return acc + Number(curr.value);
  }, 0);

  return (
    <StyledContainerTotalMoney className="container">
      <div>
        <StyledText2 color="#212529">Valor Total:</StyledText2>

        <StyledText2 color="#FD377E">R$ {total}</StyledText2>
      </div>

      <StyledSpan> O valor se refere ao saldo </StyledSpan>
    </StyledContainerTotalMoney>
  );
};

export default TotalMoney;
