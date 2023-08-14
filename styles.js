import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @media (max-width: 320px) {
    body {
    margin: 0;
    font-family: system-ui;
  }
  }

`;
