/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        title="Home"
      >
        <AiOutlineHome />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
        title="Skills"
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
        title="Portfolio"
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        title="Contact"
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
