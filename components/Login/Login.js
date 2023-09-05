import { useRouter } from "next/router";
import { useState } from "react";

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
      <form onSubmit={handleLogin}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          id="username"
          placeholder="Jana"
          value={credentials.username}
          onChange={(event) =>
            setCredentials({ ...credentials, username: event.target.value })
          }
        />

        <label htmlFor="">password</label>
        <input
          type="text"
          id="password"
          placeholder="Test123"
          value={credentials.password}
          onChange={(event) =>
            setCredentials({ ...credentials, password: event.target.value })
          }
        />
        <button type="submit">login</button>
      </form>
    </>
  );
}
