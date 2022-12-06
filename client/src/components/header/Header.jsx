/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import "./Header.css";

const Header = ({
  name,
  jobTitle,
  desc,
  faceook,
  behance,
  linkedinIn,
  twitter,
  github,
  instagram,
  youtube,
}) => {
  return (
    <header>
      <div className={`container`}>
        <h3>Hello I'm</h3>
        <h1>{name}</h1>
        <h5 className="text-light">A {jobTitle}</h5>
        <p>{desc}</p>
        <div className="social">
          {faceook && (
            <a href={faceook} target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
          )}
          {behance && (
            <a href={behance} target="_blank" rel="noreferrer">
              <FaBehance />
            </a>
          )}
          {linkedinIn && (
            <a href={linkedinIn} target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          )}
          {twitter && (
            <a href={twitter} target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          )}
          {instagram && (
            <a href={instagram} target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          )}
          {youtube && (
            <a href={youtube} target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          )}
        </div>
        <a href="#skills">
          <span className="mouse"></span>
          <span className="dot"></span>
        </a>
      </div>
    </header>
  );
};

export default Header;
