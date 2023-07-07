import React, { useState } from "react";

const AnchorButton = (props) => {
  const [border, setBorder] = useState("none");

  const mouseHover = () => {
    setBorder("2px solid #fff");
  };

  const mouseNotHover = () => {
    setBorder("none");
  };

  const scrollToSection = () => {
    const section = document.querySelector("." + props.targetSection);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <li
      style={{ borderBottom: border }}
      onClick={scrollToSection}
      onMouseEnter={mouseHover}
      onMouseLeave={mouseNotHover}
      id={props.anchorId}
    >
      {props.anchorText}
    </li>
  );
};

export { AnchorButton };
