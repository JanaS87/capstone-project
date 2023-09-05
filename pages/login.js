import Login from "@/components/Login/Login";
import styled from "styled-components";

export default function LoginPage() {
  return (
    <>
      <StyledLoginBackground>
        <Login />
      </StyledLoginBackground>
    </>
  );
}

const StyledLoginBackground = styled.div`
  background-image: url("/login_background2.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  width: 100%;
`;
