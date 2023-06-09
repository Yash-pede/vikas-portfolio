import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import abouts from "../../constants/about";
import { Appwrap } from "../../wrapper";

const About = () => {
  return (
    <>
      <h2 id="About" className="head-text app__about">
        I know that
        <span> Good Design </span>
        <br />
        means
        <span> Good Buisness </span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Appwrap(About,'about');
