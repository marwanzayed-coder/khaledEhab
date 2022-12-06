import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Skills.css";

const Skills = () => {
  const [skillData, setSkillData] = useState({});
  const [updataSkillData, setUpdataSkillData] = useState({});

  const [skillError, setSkillError] = useState(true);
  const [delskillError, setDelSkillError] = useState(true);
  const [updataSkillError, setUpdataSkillError] = useState(true);

  const [skills, setSkills] = useState([]);

  const Skill = (e) => {
    setSkillData({ ...skillData, [e.target.name]: e.target.value });
  };
  const addSkill = (e) => {
    e.preventDefault();
    axios
      .post("https://khaled-ehab.vercel.app/api/create_skill", skillData)
      .then(() => {
        setSkillError(false);
      });
  };
  useEffect(() => {
    axios
      .get("https://khaled-ehab.vercel.app/api/get_skills")
      .then((response) => {
        setSkills(response.data.skill);
      });
  }, [delskillError, skillError]);
  const deleteSkill = (e) => {
    axios
      .delete(
        `https://khaled-ehab.vercel.app/api/delete_skill/${e.target.attributes["data-id"].value}`
      )
      .then(() => {
        setDelSkillError(false);
      });
  };
  const editSkill = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://khaled-ehab.vercel.app/api/updata_skill/${e.target.attributes["data-id"].value}`,
        updataSkillData
      )
      .then(() => {
        setUpdataSkillError(false);
      });
  };
  const updataSkill = (e) => {
    setUpdataSkillData({ ...updataSkillData, name: e.target.value });
  };
  return (
    <section className="skills">
      <h2>Add Skill</h2>
      <form className="form" onSubmit={addSkill}>
        <input type="text" name="name" onChange={Skill} placeholder="Name" />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
      {!skillError && <p>Add Skill Succ</p>}

      <h2>Delete Skill</h2>
      <div>
        {skills.map((skill) => (
          <div key={skill._id} className="deleteSkill">
            <p>{skill.name}</p>
            <span onClick={deleteSkill} data-id={skill._id}>
              Delete
            </span>
          </div>
        ))}
      </div>
      {!delskillError && <p>Delete Skill Succ</p>}

      <h2>Edit Skill</h2>
      {skills.map((skill) => (
        <form
          className="form"
          key={skill._id}
          onSubmit={editSkill}
          data-id={skill._id}
        >
          <input
            type="text"
            name="name"
            onChange={updataSkill}
            placeholder="Name"
            defaultValue={skill.name}
          />

          <button type="submit" className="btn btn-primary">
            Updata
          </button>
        </form>
      ))}
      {!updataSkillError && <p>Updata Skill Succ</p>}
    </section>
  );
};

export default Skills;
