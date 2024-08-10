import React from "react";

function ProjectCard(props) {
  return (
    <div className="project_card">
      <div
        className="project_screenshot"
        style={{ backgroundImage: `url(${props.screenshot})` }}
      ></div>
      <div className="project_description_container">
        {/* <span className="project_type">{props.description}</span> */}
      </div>
      <a className="project_link" href={props.link} target="blank">
          {props.link_text}
      </a>
    </div>
  );
}



export { ProjectCard };
