import React, { useState, useRef, useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    guardian: "",
    accountId: ""
  });

  const internalsRef = useRef();
  const { setUser } = useContext(UserContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.password) {
      alert("Please fill out all required fields");
      return;
    }
    setUser(form);
    alert("Registered Successfully!");
  };

  return (
    <form onSubmit={handleSubmit} ref={internalsRef}>
      <h2>Register</h2>
<div>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="dob"
        placeholder="Date of Birth"
        value={form.dob}
        onChange={handleChange}
        required
      />

      <select
        name="gender"
        value={form.gender}
        onChange={handleChange}
        required
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="guardian"
        placeholder="D/O or S/O"
        value={form.guardian}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="accountId"
        placeholder="Account ID"
        value={form.accountId}
        onChange={handleChange}
        required
      />

      <textarea
        name="address"
        placeholder="Full Address"
        value={form.address}
        onChange={handleChange}
        required
      />
</div>
      <button type="submit">Register</button>
    </form>
  );
}
