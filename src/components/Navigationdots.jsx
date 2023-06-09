import React from "react";

const Navigationdots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["Home", "About", "Work", "Contact", "Skills"].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default Navigationdots;
