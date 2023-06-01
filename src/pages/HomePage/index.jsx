import { React, useState } from "react";
import Form from "../../components/Form";
import Header from "../../components/Header";
import List from "../../components/List";
import TotalMoney from "../../components/TotalMoney";
import { StyledContainer } from "./style";

const HomePage = () => {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <>
      <Header />
      <StyledContainer>
        <section>
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />

          <TotalMoney listTransactions={listTransactions} />
        </section>

        <section>
          <List
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        </section>
      </StyledContainer>
    </>
  );
};

export default HomePage;
