import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <h3>Dash</h3>
      <ul>
        <li>
          <NavLink to="/dashboard/user">
            <AiOutlineHome />
            <span>User</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/skills">
            <BiBook />
            <span>Skills</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/works">
            <RiServiceLine />
            <span>Works</span>
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
