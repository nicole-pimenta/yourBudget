import { useState } from "react";
import Form from "../../components/Form";
import Header from "../../components/Header";
import List from "../../components/List";
import TotalMoney from "../../components/TotalMoney";
import { StyledContainer } from "../../styles/container";
import { StyledHomePage, FormSection, ListSection } from "./style";

const HomePage = () => {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <>
      <Header />
      <StyledContainer>
        <StyledHomePage>
          <FormSection>
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />

            <TotalMoney listTransactions={listTransactions} />
          </FormSection>
          <ListSection>
            <List
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
          </ListSection>
        </StyledHomePage>
      </StyledContainer>
    </>
  );
};

export default HomePage;
