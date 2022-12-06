/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import axios from "axios";

const Portfolio = () => {
  const [works, setWork] = useState([]);
  useEffect(() => {
    axios.get("/api/get_works").then((response) => {
      setWork(response.data.work);
    });
  }, []);
  return (
    <section id="portfolio" className="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container">
        {works.map((work) => (
          <div className="portfolio-item" key={work._id}>
            <div className="portfolio-item-img">
              <img src={work.image} alt="img" />
            </div>
            <h3 dir="auto">{work.title}</h3>
            <a
              href={work.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Behance
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
