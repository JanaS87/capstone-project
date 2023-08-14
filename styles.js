import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    background-color:#F3E99F;
  }

  h3 {
    background-color: white;
  }

  @media (max-width: 320px) {
    body {
    
    margin: 0;
    font-family: system-ui;
  }
  }

`;
