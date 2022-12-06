import Sidebar from "components/dashboard/Sidebar/Sidebar";
import React from "react";
import "../assets/dashboard.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const DashBoard = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const login = (e) => {
    e.preventDefault();
    axios.get("/api/get_dash").then((res) => {
      if (
        username === res.data.dash[0].username &&
        password === res.data.dash[0].password
      ) {
        setShow(true);
      }
    });
  };

  return (
    <div>
      {show ? (
        <main className="page flex">
          <Sidebar />
          <Outlet />
        </main>
      ) : (
        <div className="dash">
          <form className="dashboard">
            <h2>Login - Dashboard Admin</h2>
            <input
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button className="btn btn-primary" onClick={login}>
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
