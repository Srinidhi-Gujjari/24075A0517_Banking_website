import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Login() {
  const { user } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();
    if (user?.email === email && user?.password === password) {
      alert("Login Successful");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <form onSubmit={loginUser}>
      <h2>Login</h2>
      <input type="email" placeholder="Email ID" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
}
