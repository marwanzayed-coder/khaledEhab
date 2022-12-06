import Contact from "components/contact/Contact";
import Header from "components/header/Header";
import Nav from "components/nav/Nav";
import Portfolio from "components/portfolio/Portfolio";
import Skills from "components/skills/Skills";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";

const Home = () => {
  const [name, setName] = useState();
  const [jobTitle, setJobTitle] = useState();
  const [desc, setDesc] = useState();

  const [faceook, setFacebook] = useState();
  const [behance, setBehance] = useState();
  const [linkedinIn, setLinkedinIn] = useState();
  const [twitter, setTwitter] = useState();
  const [github, setGithub] = useState();
  const [instagram, setInstagram] = useState();
  const [youtube, setYoutube] = useState();

  const [skills, setSkills] = useState([]);

  axios.get("/api/get_user/khaled").then((response) => {
    setName(response.data.User[0].name);
    setJobTitle(response.data.User[0].jobTitle);
    setDesc(response.data.User[0].desc);
  });
  axios.get("/api/get_links").then((response) => {
    setFacebook(response.data.Link[0].facebook);
    setBehance(response.data.Link[0].behance);
    setLinkedinIn(response.data.Link[0].linkedinIn);
    setTwitter(response.data.Link[0].twitter);
    setGithub(response.data.Link[0].github);
    setInstagram(response.data.Link[0].instagram);
    setYoutube(response.data.Link[0].youtube);
  });
  useEffect(() => {
    axios.get("/api/get_skills").then((response) => {
      setSkills(response.data.skill);
    });
  }, []);
  return (
    <>
      <Nav />
      <Header
        name={name}
        jobTitle={jobTitle}
        desc={desc}
        faceook={faceook}
        github={github}
        instagram={instagram}
        behance={behance}
        linkedinIn={linkedinIn}
        twitter={twitter}
        youtube={youtube}
      />
      <Skills jobTitle={jobTitle} skills={skills} />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
