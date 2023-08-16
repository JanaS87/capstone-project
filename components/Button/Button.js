import styled from "styled-components";

export default function Button() {
  return <StyledButton></StyledButton>;
}

const StyledButton = styled.button`
  padding: 16px 42px;
  margin-left: 0;
  border-radius: 10px/20px;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
  line-height: 1.25;
  background: #fc6e51;
  text-decoration: none;
  color: black;
  font-size: 16px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
`;
