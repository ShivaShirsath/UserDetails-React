import React from "react";

export default function UserDetails({ activeUser }) {
  return (
    <div
      style={{
        height: "100vh",
        border: "2px solid #6e6e6e",
        padding: "16px",
        borderRadius: " 8px",
        width: "55%",
        marginLeft: "16px",
      }}
    >
      <h2>User Details</h2>
      <p>
        <strong>Name:</strong> {activeUser.name}
      </p>
      <p>
        <strong>Username:</strong> {activeUser.username}
      </p>
      <p>
        <strong>Email:</strong> {activeUser.email}
      </p>
      <p>
        <strong>Address:</strong> {activeUser.address.street},{" "}
        {activeUser.address.suite}, {activeUser.address.city},{" "}
        {activeUser.address.zipcode}
      </p>
      <p>
        <strong>Phone:</strong> {activeUser.phone}
      </p>
      <p>
        <strong>Website:</strong> {activeUser.website}
      </p>
      <p>
        <strong>Company:</strong> {activeUser.company.name}
      </p>
    </div>
  );
}
