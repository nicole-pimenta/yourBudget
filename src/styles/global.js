import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  text-decoration: none;
}

img {
  max-width: 100%;
}

ul , ol {
    list-style: none;
}

button{
    cursor: pointer;
    background: transparent;
    border: 0;
}

:root {
  --color-primary: #FD377E;
  --color-primary-2: #e34981;
  --color-secondary:#03b898;
  --color-grey-1:  #f8f9fa;
  --color-grey-2:  #e9ecef;
  --color-grey-3:  #868e96;
  --color-grey-4:  #212529;
  --radius-default: 0.5rem;
  --title-1: 38px;
  --title-2: 22px;
  --title-3: 16px;
  --title-4: 12px;
  --text-1: 16px;
  --text-2: 12px;

}

body {
height: 100vh;
font-family: "Nunito", sans-serif;
background: var(--color-grey-1);
}

`;
