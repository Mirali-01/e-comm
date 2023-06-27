import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../utils/auth";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(
      name,
      username,
      password,
      email,
      () => {
        console.log("registration success");
        navigate("/login");
      },
      (err) => {
        console.error("registration error", err);
      }
    );
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      <p
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </p>
    </div>
  );
};

export default Register;
