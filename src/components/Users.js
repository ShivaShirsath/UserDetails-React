import React from "react";

export default function Users({ users, activeUser, setActiveUser }) {
  return (
    <div
      style={{
        height: "100vh",
        border: "2px solid #6e6e6e",
        padding: "16px",
        borderRadius: " 8px",
        width: "40%",
      }}
    >
      {users.map((user, index) => (
        <UserItem
          user={user}
          isActiveUser={user.id === activeUser.id}
          setActiveUser={setActiveUser}
        />
      ))}
    </div>
  );
}

function UserItem({ user, isActiveUser, setActiveUser }) {
  return (
    <div
      onClick={() => setActiveUser(user)}
      style={{
        padding: "8px",
        background: isActiveUser ? "#26ae60" : "#586776",
        marginTop: 8,
        borderRadius: "8px",
        color: isActiveUser ? "#000" : "#53E0BC",
        cursor: isActiveUser ? "alias" : "pointer",
      }}
    >
      {user.name}
    </div>
  );
}
