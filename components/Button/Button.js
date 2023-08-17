import styled from "styled-components";

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
  font-size: 1.5rem;
  color: white;
  background-color: #ff6d60;
  cursor: pointer;
`;
