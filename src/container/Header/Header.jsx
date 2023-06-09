import React from "react";
import "./Header.scss";

import { motion } from "framer-motion";
import { images } from "../../constants";
import { slideIn } from "../../utils/motion";

import { Appwrap } from "../../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div id="Home" className="app__header app__flex">
      <motion.div
        variants={slideIn("left", "spring", 0.3, 0.1)}
        initial="hidden"
        whileInView="show"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div className="" style={{ marginLeft: 30 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Vikas</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Robotics Engineering</p>
            <p className="p-text">Hardware Design</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile-bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay-circle"
          src={images.circle}
          alt="Profile Circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.arduino, images.fusion360, images.raspberrypi].map((circle, index) => (
          <div className="circle-cmp app-flex" key={`circle-${index}`}
          >
            <img src={circle} alt="Circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Appwrap(Header,'home');
