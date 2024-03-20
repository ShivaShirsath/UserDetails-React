import React, { useState, useEffect } from "react";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";

export default function App() {
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setActiveUser(json?.[0]);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        background: "#2F363F",
        color: "#53E0BC",
        width: "100%",
        height: "100vh",
        padding: "16px",
      }}
    >
      {users.length > 0 && (
        <Users
          {...{
            users,
            activeUser,
            setActiveUser,
          }}
        />
      )}
      {users.length > 0 && <UserDetails activeUser={activeUser} />}
    </div>
  );
}
