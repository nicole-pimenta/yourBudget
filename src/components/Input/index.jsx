import { forwardRef } from "react";
import { StyledLabel } from "../../styles/typography";
import { StyledInputContainer } from "./style";

const Input = forwardRef(({ label, id, placeholder, type, ...rest }, ref) => {
  return (
    <StyledInputContainer>
      {StyledLabel ? <StyledLabel htmlFor={id}>{label}</StyledLabel> : null}⁠{" "}
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
    </StyledInputContainer>
  );
});

export default Input;
