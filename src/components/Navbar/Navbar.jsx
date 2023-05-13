import { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { navVariants } from "../../utils/motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.nav
      className="app__navbar"
      variants={navVariants}
      initial="hidden"
      whileInView="show"
    >
      <div className="app__navbar-logo">
        <img src={images.vikaslogo} alt="Logo" />
      </div>
      <ul className="app__navbar-links">
        {["Home", "About", "Contact", "Work", "Skills"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt3 onClick={() => setToggle(true)} />
        {/*  */}
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeIn" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["Home", "About", "Contact", "Work", "Skills"].map((item) => (
                <li className="app__flex p-text" key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
