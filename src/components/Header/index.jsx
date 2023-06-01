import React from "react";
import { StyledTitle2 } from "../../styles/typography";
import { StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <StyledTitle2>
          Your<span>Budget</span>
        </StyledTitle2>
      </div>
    </StyledHeader>
  );
};

export default Header;
