import React, { useState, useEffect } from "react";
import "./Works.css";
import axios from "axios";

const Works = () => {
  const [projectData, setProjectData] = useState({});
  const [projectError, setProjectError] = useState(true);
  const addProject = (e) => {
    e.preventDefault();
    axios
      .post("https://khaled-ehab.vercel.app/api/create_work", projectData)
      .then(() => {
        setProjectError(false);
      });
  };
  const addProjectData = (e) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  };

  const [updataProjectData, setUpdataProjectData] = useState({});
  const [updataProjectError, setUpdataProjectError] = useState(true);
  const UpdataProject = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://khaled-ehab.vercel.app/api/updata_work/${e.target.attributes["data-id"].value}`,
        updataProjectData
      )
      .then(() => {
        setUpdataProjectError(false);
      });
  };
  const UpdataProjectData = (e) => {
    setUpdataProjectData({
      ...updataProjectData,
      [e.target.name]: e.target.value,
    });
  };
  const [deleteProjectError, setDeleteProjectError] = useState(true);
  const DeleteProject = (e) => {
    e.preventDefault();
    axios
      .delete(
        `https://khaled-ehab.vercel.app/api/delete_work/${e.target.attributes["data-id"].value}`
      )
      .then(() => {
        setDeleteProjectError(false);
      });
  };
  const [works, setWork] = useState([]);
  useEffect(() => {
    axios
      .get("https://khaled-ehab.vercel.app/api/get_works")
      .then((response) => {
        setWork(response.data.work);
      });
  }, [deleteProjectError, projectError, updataProjectError]);
  return (
    <section className="works">
      <h2>Add New Work - Project</h2>
      <form className="form" onSubmit={addProject}>
        <input
          type="text"
          name="title"
          onChange={addProjectData}
          placeholder="Title"
        />
        <input
          type="text"
          name="image"
          onChange={addProjectData}
          placeholder="Image URL"
        />
        <input
          type="text"
          name="behance"
          onChange={addProjectData}
          placeholder="Project Behance URL"
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
      {!projectError && <p>Add Project Succ</p>}

      <h2>Updata Project</h2>
      {works.map((work) => (
        <form
          className="form"
          onSubmit={UpdataProject}
          key={work._id}
          data-id={work._id}
        >
          <input
            type="text"
            name="title"
            onChange={UpdataProjectData}
            placeholder="Title"
            defaultValue={work.title}
          />
          <input
            type="text"
            name="image"
            onChange={UpdataProjectData}
            placeholder="Image URL"
            defaultValue={work.image}
          />
          <input
            type="text"
            name="behance"
            onChange={UpdataProjectData}
            placeholder="Project Behance URL"
            defaultValue={work.behance}
          />
          <button type="submit" className="btn btn-primary">
            Updata
          </button>
        </form>
      ))}
      {!updataProjectError && <p>Updata Project Succ</p>}

      <h2>Delete Project</h2>
      <div>
        {works.map((work) => (
          <div key={work._id} className="deleteWork">
            <p>{work.title}</p>
            <span onClick={DeleteProject} data-id={work._id}>
              Delete
            </span>
          </div>
        ))}
      </div>
      {!deleteProjectError && <p>Delete Project Succ</p>}
    </section>
  );
};

export default Works;
