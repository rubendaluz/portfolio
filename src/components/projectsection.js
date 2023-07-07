import React from "react";
import { ProjectCard } from "./projectcard.js";
// import html_img from "./img/html.png";

function ProjectSection() {
  return (
    <div className="projects_container">
      <ProjectCard
        screenshot={
          "https://images.ctfassets.net/lzny33ho1g45/5LqY8rOVmCiN8TrZDScqAB/e932b39ff7ebdeb6c1bf4f35e7eed58e/full-page-screenshots-in-chrome-02-developer-menu-command.png"
        }
        link="www.youtube.com"
        description="Project1"
      ></ProjectCard>
    </div>
  );
}

export { ProjectSection };
