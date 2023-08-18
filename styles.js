import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    //background-color:#F3E99F;
  }

  @media (max-width: 320px) {
    body {
    
    margin: 0;
    font-family: system-ui;
  }
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}
  input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}
`;
