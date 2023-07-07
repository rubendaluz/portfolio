import React from "react";

function SocialIcon(props) {
  return (
    <div className="social_icon">
      <img src={props.image} alt={props.alt}></img>
    </div>
  );
}
export { SocialIcon };
