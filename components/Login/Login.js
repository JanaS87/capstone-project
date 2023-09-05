import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

export default function Login() {
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
      router.push("/");
    } else {
      alert("Wrong username or password!");
    }
  }

  return (
    <>
      <StyledForm onSubmit={handleLogin}>
        <StyledLoginName>
          <label htmlFor="username">username</label>
          <StyledInput
            type="text"
            id="username"
            placeholder="Jana"
            value={credentials.username}
            onChange={(event) =>
              setCredentials({ ...credentials, username: event.target.value })
            }
          />
        </StyledLoginName>

        <div>
          <label htmlFor="">password</label>
          <StyledInput
            type="password"
            id="password"
            placeholder="Test123"
            value={credentials.password}
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
          />
        </div>
        <StyledButton type="submit">login</StyledButton>
      </StyledForm>
    </>
  );
}

const StyledLoginName = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-bottom: 15px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  text-align: center;
  border-radius: 10px/20px;
  background: transparent;
  backdrop-filter: blur(2px);
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledInput = styled.input`
  border-radius: 10px/20px;
  max-width: 100%;
  text-align: center;
  background-color: transparent;
  margin: 5px 0;
  color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  outline: none;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
`;

const StyledButton = styled.button`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
  border: none;
  border-radius: 10px/20px;
  color: #333;
  font-size: 1rem;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  &:hover {
    background: rgba(255, 255, 255, 0.9); // Etwas heller beim Hover
  }

  &:active {
    transform: scale(0.95); // Ein kleiner "Pressed"-Effekt beim Klicken
  }

  &:focus {
    outline: none; // Entfernt den Browser-Standard-Fokus-Rand
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); // Fügt einen sanften Schatten für den Fokus-Zustand hinzu
  }
`;
