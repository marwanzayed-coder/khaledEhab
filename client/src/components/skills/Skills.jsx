import React, { useState } from "react";
import "./Skills.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Skills = ({ skills, jobTitle }) => {
  const [open, setOpen] = useState(false);
  return (
    <section id="skills" className="skills">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container">
        <div className="skills">
          <div className="skill">
            <div className="skill-head" onClick={() => setOpen(!open)}>
              <h3>{jobTitle}</h3>
              {open ? <AiFillCaretUp /> : <AiFillCaretDown />}
            </div>
            <div className="skill_container">
              {open &&
                skills.map((skill) => (
                  <div className="skill_content" key={skill._id}>
                    <BsPatchCheckFill className="skill_icon" />
                    <h4>{skill.name}</h4>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
