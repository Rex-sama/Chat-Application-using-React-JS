import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const Submit = async (e) => {
    e.preventDefault();
    const authObject = {
      "Project-ID":process.env.REACT_APP_PROJECT_ID,
      "User-Name": username,
      "User-Secret": password,
    };
    try {
      const res = await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      console.log(res.data);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      window.location.reload();
    } catch (error) {
      setError("Invalid Username or Password");
      setTimeout(() => {
        setError(" ");
      }, 3000);
    }
  };

  return (
    <div className="Login">
      <h1>Login</h1> <br />
      <p>{error}</p>
      <form className="login-form" onSubmit={Submit}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
