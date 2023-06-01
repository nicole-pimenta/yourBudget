import { StyledText2 } from "../../styles/typography";
import Card from "../Card";
import { StyledContainerList } from "./style";

const List = ({ listTransactions, setListTransactions }) => {
  return (
    <StyledContainerList>
      <StyledText2 color="#212529">Resumo financeiro</StyledText2>

      {listTransactions.length === 0 ? (
        <ul>
          <span>Você ainda não possui nenhum lançamento ...</span>
        </ul>
      ) : (
        <ul>
          {listTransactions.map((item) => (
            <Card
              key={item.id}
              itemTransaction={item}
              setListTransactions={setListTransactions}
              listTransactions={listTransactions}
            />
          ))}
        </ul>
      )}
    </StyledContainerList>
  );
};

export default List;
