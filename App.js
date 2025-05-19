import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { UserProvider } from "./context/UserContext";

import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Balance from "./pages/BalanceEnquiry";
import Transfer from "./pages/transfer";
import Contact from "./pages/contact";
import About from "./pages/about";

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
