import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

:root {
  --navbar-icon-active: #EEB76B;
  --navbar-icon-inactive: #D2E9E9;
  --tab-icon-active: #D89216;
  --tab-icon-inactive: #7f8487;

}



  html, body, #__next {
    height: 100%;
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    flex-direction: column;
    background-image: url("/capp_background2.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #D9D9D9;
    background-attachment: fixed;
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
