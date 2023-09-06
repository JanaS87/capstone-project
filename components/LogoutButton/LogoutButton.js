import styled from "styled-components";

export default function LogoutButton({ loggedIn, handleLogout }) {
  console.log("User:", loggedIn);
  return (
    <>
      <StyledGreetingContainer>
        <StyledGreeting>Hello, {loggedIn}!</StyledGreeting>
      </StyledGreetingContainer>
      <StyledContainer>
        <StyledLogoutButton onClick={handleLogout}>Logout</StyledLogoutButton>
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

const StyledLogoutButton = styled.button`
  text-align: center;
  background-color: #f0caa3;
  color: #413f42;
`;
