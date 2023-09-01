import { styled } from "styled-components";

export default function OrangePaw() {
  return (
    <StyledPaw
      id="icons"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <path
        className="cls-1"
        d="M324.5,282.26c-11.49-19.8-36.22-33.5-64.9-33.5s-53.41,13.7-64.9,33.5c-20.53,9.58-33.5,23.62-33.5,39.28,0,28.87,44.05,52.27,98.4,52.27s98.4-23.4,98.4-52.27c0-15.66-12.97-29.7-33.5-39.28Z"
      />
      <ellipse
        className="cls-1"
        cx="295.77"
        cy="176.77"
        rx="38.75"
        ry="29.72"
        transform="translate(55.53 423.78) rotate(-76.66)"
      />
      <ellipse
        className="cls-1"
        cx="212.93"
        cy="176.77"
        rx="29.72"
        ry="38.75"
        transform="translate(-35.04 53.89) rotate(-13.34)"
      />
      <ellipse
        className="cls-1"
        cx="148.91"
        cy="240.32"
        rx="26.12"
        ry="34.05"
        transform="translate(-100.21 106.65) rotate(-30)"
      />
      <ellipse
        className="cls-1"
        cx="363.09"
        cy="231.51"
        rx="34.05"
        ry="26.12"
        transform="translate(-18.94 430.2) rotate(-60)"
      />
    </StyledPaw>
  );
}

const StyledPaw = styled.svg`
  color: orange;
`;
