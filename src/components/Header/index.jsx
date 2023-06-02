import { StyledTitle2 } from "../../styles/typography";
import { StyledContainer } from "../../styles/container";
import { StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledTitle2>
          Your<span>Budget</span>
        </StyledTitle2>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
