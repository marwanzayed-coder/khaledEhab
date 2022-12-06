import React, { useState, useEffect } from "react";
import "./User.css";
import axios from "axios";

const User = () => {
  const [link, setLink] = useState({});
  const [user, setUser] = useState({});

  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const [facebook, setFacebook] = useState("");
  const [behance, setBehance] = useState("");
  const [linkedinIn, setLinkedinIn] = useState("");
  const [twitter, setTwitter] = useState("");
  const [github, setGithub] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");

  const [userError, setUserError] = useState(true);
  const [linkError, setLinkError] = useState(true);

  useEffect(() => {
    axios
      .get("https://khaled-ehab.vercel.app/api/get_user/khaled")
      .then((response) => {
        setName(response.data.User[0].name);
        setJobTitle(response.data.User[0].jobTitle);
      });
    axios
      .get("https://khaled-ehab.vercel.app/api/get_links")
      .then((response) => {
        setFacebook(response.data.Link[0].facebook);
        setBehance(response.data.Link[0].behance);
        setLinkedinIn(response.data.Link[0].linkedinIn);
        setTwitter(response.data.Link[0].twitter);
        setGithub(response.data.Link[0].github);
        setInstagram(response.data.Link[0].instagram);
        setYoutube(response.data.Link[0].youtube);
      });
  }, []);

  const userSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://khaled-ehab.vercel.app/api/updata_user/638a8331316379acda3a43fd",
        user
      )
      .then(() => {
        setUserError(false);
      });
  };
  const userData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const linkSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://khaled-ehab.vercel.app/api/updata_link/6383ae9a920dae6c1528622f",
        link
      )
      .then(() => {
        setLinkError(false);
      });
  };
  const linkData = (e) => {
    setLink({ ...link, [e.target.name]: e.target.value });
  };

  return (
    <section className="user">
      <h2>Updata User Data</h2>
      <form className="form" onSubmit={userSubmit}>
        <input
          type="text"
          name="name"
          onChange={userData}
          placeholder="Name"
          defaultValue={name}
        />
        <input
          type="text"
          name="jobTitle"
          onChange={userData}
          placeholder="Job Title"
          defaultValue={jobTitle}
        />
        <button type="submit" className="btn btn-primary">
          Updata
        </button>
      </form>
      {!userError && <p>Updata Done</p>}

      <h2>Updata User Links</h2>
      <form className="form" onSubmit={linkSubmit}>
        <input
          type="text"
          name="facebook"
          onChange={linkData}
          placeholder="Facebook"
          defaultValue={facebook}
        />
        <input
          type="text"
          name="twitter"
          onChange={linkData}
          placeholder="Twitter"
          defaultValue={twitter}
        />
        <input
          type="text"
          name="linkedinIn"
          onChange={linkData}
          placeholder="LinkedinIn"
          defaultValue={linkedinIn}
        />
        <input
          type="text"
          name="behance"
          onChange={linkData}
          placeholder="Behance"
          defaultValue={behance}
        />
        <input
          type="text"
          name="github"
          onChange={linkData}
          placeholder="Github"
          defaultValue={github}
        />
        <input
          type="text"
          name="instagram"
          onChange={linkData}
          placeholder="Instagram"
          defaultValue={instagram}
        />
        <input
          type="text"
          name="youtube"
          onChange={linkData}
          placeholder="Youtube"
          defaultValue={youtube}
        />
        <button type="submit" className="btn btn-primary">
          Updata
        </button>
      </form>
      {!linkError && <p>Updata Done</p>}
    </section>
  );
};

export default User;
