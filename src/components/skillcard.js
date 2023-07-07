import React from "react";

function SkillCard(props) {
  return (
    <div className="skill_card">
      <div className="skill_img">
        <img src={props.image} alt="skill_name"></img>
      </div>
      <p className="skill_name">{props.name}</p>
    </div>
  );
}

export { SkillCard };
