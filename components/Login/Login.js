import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

export default function Login({ loggedIn, setLoggedIn }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();

  function handleLogin(event) {
    event.preventDefault();

    const fakeUsername = "Jana";
    const fakePassword = "Test123";

    if (
      credentials.username === fakeUsername &&
      credentials.password === fakePassword
    ) {
      setLoggedIn(credentials.username);
      router.push("/overview");
    } else {
      alert("Wrong username or password!");
    }
  }

  return (
    <>
      <StyledH1>CAPP</StyledH1>
      <StyledH2>Your cat food app</StyledH2>

      <StyledForm onSubmit={handleLogin}>
        <StyledLogin>
          <StyledLabel htmlFor="username">username</StyledLabel>
          <StyledInput
            type="text"
            id="username"
            placeholder="Jana"
            value={credentials.username}
            onChange={(event) =>
              setCredentials({ ...credentials, username: event.target.value })
            }
          />
        </StyledLogin>

        <StyledLogin>
          <StyledLabel htmlFor="">password</StyledLabel>
          <StyledInput
            type="password"
            id="password"
            placeholder="Test123"
            value={credentials.password}
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
          />
        </StyledLogin>
        <div>
          <StyledButton type="submit">Login</StyledButton>
        </div>
      </StyledForm>
    </>
  );
}

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-bottom: 10px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  text-align: center;
  border-radius: 10px/20px;
  background: transparent;
  position: absolute;
  bottom: 16.2%;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledLabel = styled.label`
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 1);
  font-size: 16px;
  display: block;
  width: 60%;
  margin: 4% auto;
  padding: 5px;
  margin-bottom: 1%;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.4); // Ein leichter weißer Hintergrund
  border-radius: 10px/20px;
  backdrop-filter: blur(2px);
`;

const StyledInput = styled.input`
  border-radius: 10px/20px;
  max-width: 50%;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.32);
  margin: 5px auto;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.1);
  outline: none;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  font-size: 18px;
`;

const StyledButton = styled.button`
  background: rgba(255, 255, 255, 0.32);
  backdrop-filter: blur(2px);
  border: none;
  border-radius: 10px/20px;
  color: #333;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 1);
  font-size: 1rem;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 7px;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;

const StyledH1 = styled.h1`
  font-family: "Dancing Script", "Lucida Sans", "Lucida Sans Regular",
    "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 4rem;
  text-align: center;
  margin-bottom: 0;
  color: white;
  letter-spacing: 2.5px;
  text-shadow: 2px 2px 10px #f0caa3;
`;

const StyledH2 = styled.h2`
  font-family: "Amaranth", italic;
  margin-top: 0;
  font-size: 2rem;
  margin-right: 0.82em;
  text-align: right;
  color: #666;
  text-shadow: 2px 2px 10px #f0caa3;
`;
