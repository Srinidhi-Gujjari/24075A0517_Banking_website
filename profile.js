import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <p>No user registered.</p>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>DOB: {user.dob}</p>
      <p>Gender: {user.gender}</p>
      <p>Phone: {user.phone}</p>
      <p>Email: {user.email}</p>
      <p>Guardian: {user.guardian}</p>
      <p>Account ID: {user.accountId}</p>
      <p>Address: {user.address}</p>
    </div>
  );
}
