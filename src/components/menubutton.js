import React, { useState } from "react";

const AnchorButton = ({ anchorId, anchorText, targetSection, onClick, isActive }) => {
  const [border, setBorder] = useState("none");

  const mouseHover = () => {
    setBorder("2px solid #fff");
  };

  const mouseNotHover = () => {
    setBorder("none");
  };

  return (
    <li
      style={{ borderBottom: border }}
      onClick={() => onClick(targetSection)}
      onMouseEnter={mouseHover}
      onMouseLeave={mouseNotHover}
      id={anchorId}
      className={isActive ? 'active' : ''}
    >
      {anchorText}
    </li>
  );
};

export { AnchorButton };

