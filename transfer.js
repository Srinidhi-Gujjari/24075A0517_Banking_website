import React, { useState } from "react";

export default function Transfer() {
  const [form, setForm] = useState({ mobile: "", amount: "", pin: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePay = () => {
    if (form.pin !== "1234") {
      setMessage("Invalid PIN");
    } else {
      setMessage(`Transferred $${form.amount} to ${form.mobile}`);
      setForm({ mobile: "", amount: "", pin: "" });
    }
  };

  return (
    <div>
      <h2>Transfer Money</h2>
      <input name="mobile" placeholder="To Mobile Number" value={form.mobile} onChange={handleChange} />
      <input name="amount" placeholder="Amount" value={form.amount} onChange={handleChange} />
      <input name="pin" type="password" placeholder="Enter PIN" value={form.pin} onChange={handleChange} />
      <button onClick={handlePay}>Pay</button>
      {message && <p>{message}</p>}
    </div>
  );
}
