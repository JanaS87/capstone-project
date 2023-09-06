import styled from "styled-components";

export default function LogoutButton({ loggedIn, handleLogout }) {
  console.log("User:", loggedIn);
  return (
    <>
      <StyledGreetingContainer>
        <StyledGreeting>Hello, {loggedIn}!</StyledGreeting>
      </StyledGreetingContainer>
      <StyledContainer>
        <button onClick={handleLogout}>Logout</button>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
`;

const StyledGreetingContainer = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  font-size: 12px;
  color: white;
`;
const StyledGreeting = styled.span`
  font-size: 12px;
`;
