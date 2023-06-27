import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../utils/auth";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(username, password);

    signIn(
      username,
      password,
      () => {
        console.log("login success");
        navigate("/");
      },
      (err) => {
        console.error("login error", err);
      }
    );
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="Password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p
        onClick={() => {
          navigate("/register");
        }}
      >
        Don't Have an Account, Sign Up!
      </p>
    </div>
  );
};

export default Login;
