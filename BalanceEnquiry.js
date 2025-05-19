import React, { useState } from "react";

export default function BalanceEnquiry() {
  const [pin, setPin] = useState("");
  const [balance, setBalance] = useState(null);

  const handleCheck = () => {
    if (pin === "1234") {
      setBalance("$12,345.00");
    } else {
      alert("Incorrect PIN");
    }
  };

  return (
    <div>
      <h2>Balance Enquiry</h2>
      <input type="password" placeholder="Enter PIN" value={pin} onChange={(e) => setPin(e.target.value)} />
      <button onClick={handleCheck}>Check Balance</button>
      {balance && <p>Your Balance: {balance}</p>}
    </div>
  );
}
