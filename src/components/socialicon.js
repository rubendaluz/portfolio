import React, { useState } from "react";

function SocialIcon(props) {
  const [size, setSize] = useState();

  const increaseSize = () => {
    setSize("90%");
  };

  const decreaseSize = () => {
    setSize();
  };

  const openLink = () => {
    window.open(props.link, "_blank");
  };

  return (
    <div className="social_icon">
      <img
        style={{ width: size, height: size }}
        onMouseEnter={increaseSize}
        onMouseLeave={decreaseSize}
        onClick={openLink}
        src={props.image}
        alt={props.alt}
      ></img>
    </div>
  );
}
export { SocialIcon };
