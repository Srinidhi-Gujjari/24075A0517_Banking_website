import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link> | 
    <Link to="/register">Register</Link> | 
    <Link to="/login">Login</Link> | 
    <Link to="/profile">Profile</Link> | 
    <Link to="/balance">Balance Enquiry</Link> | 
    <Link to="/transfer">Transfer</Link> | 
    <Link to="/contact">Contact</Link> | 
    <Link to="/about">About Us</Link>
  </nav>
);

export default Navbar;
