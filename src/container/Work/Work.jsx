import React, { useState, useEffect } from "react";
import "./Work.scss";
import "./work";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { color, motion } from "framer-motion";
import { Appwrap } from "../../wrapper";
import { slideIn } from "../../utils/motion";
import images from "../../constants/images";
import { projects } from "../../constants";

const ProjectCard = ({
  projectId,
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_link,
}) => (
  <motion.div
    variants={slideIn("left", "spring", 0.3 * index, 0.7)}
    initial="hidden"
    whileInView="show"
    className="project-card"
  >
    <div className="project-image">
      <a href="">
        <img src={images.embc} alt="" />
      </a>
    </div>
    <div className="proj-description">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="proj-tags">
        {tags.map((tag, index) => (
          <p
            key={index}
            className="tag"
            // style={{ color: tag.color }}
            style={{ color: "gray" }}
          >{`#${tag.name}`}</p>
        ))}
      </div>
    </div>
  </motion.div>
);

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const handleWorkFilter = (item) => setActiveFilter(item);

  return (
    <>
      <h2 id="About" className="head-text app__about">
        My
        <span> Work </span>
        Section
      </h2>
      <div className="app__work-filter">
        {["Raspberry pi", "Easy EDA", "System Design", "Arduino", "All"].map(
          (item, index) => (
            <div
              className={`app__work-filter-item app__flex ${
                activeFilter === item ? "item-active" : ""
              }`}
              key={item + index}
              onClick={() => handleWorkFilter(item)}
            >
              {item}
            </div>
          )
        )}
      </div>

      <div className="proj-card">
        {projects.map((project, index) => (
          <ProjectCard key={project.index} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default Appwrap(Work, "Work");
