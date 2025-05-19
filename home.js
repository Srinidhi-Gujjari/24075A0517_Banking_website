import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome to Online Banking</h2>
      <button onClick={() => navigate("/balance")}>Balance</button>
      <button onClick={() => navigate("/transfer")}>Transfer</button>
      <button onClick={() => navigate("/about")}>About Us</button>
      <button onClick={() => navigate("/profile")}>Profile</button>
      <button onClick={() => navigate("/contact")}>Contact</button>
    </div>
  );
}
