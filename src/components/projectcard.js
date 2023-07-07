import React from "react";

function ProjectCard(props) {
  return (
    <div className="project_card">
      <div
        className="project_screenshot"
        style={{ backgroundImage: `url(${props.screenshot})` }}
      ></div>
      <div className="project_description_container">
        <a className="project_link" href={props.link} target="blank">
          {props.link_text}
        </a>
        <span className="project_description">{props.description}</span>
      </div>
    </div>
  );
}

export { ProjectCard };
