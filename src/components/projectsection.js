import React from "react";
import { ProjectCard } from "./projectcard.js";
import screenshot1 from "./img/Screenshot1.png";
import screenshot2 from "./img/Screenshot2.png";

function ProjectSection() {
  return (
    <div className="projects_container">
      <ProjectCard
        screenshot={screenshot1}
        link="https://rubendaluz.github.io/Projeto_WheatherApp/"
        link_text="www.wheatherapp.com"
        description="Wheather App"
      />
      <ProjectCard
        screenshot={screenshot2}
        link="https://github.com/rubendaluz/CV_WebAPP"
        link_text="Project Repositorie"
        description="CV app"
      />
      <ProjectCard
        screenshot={
          "https://www.harper-adams.ac.uk/courses/img/responsive/large/Rural-Property-Surveying.jpg"
        }
        link="https://github.com/rubendaluz/Programa-Gestao-de-Propriedades"
        link_text="Project Repositorie"
        description="Properties Manegement System"
      />
      <ProjectCard
        screenshot={
          "https://codeprojectz.com/wp-content/uploads/2021/09/Employee-Management-System-In-C-With-Source-Code.png"
        }
        link="https://github.com/rubendaluz/Gestor/tree/master/src/main/java"
        link_text="Project Repositorie"
        description="IT Company Manegement System"
      />
      <ProjectCard
        screenshot={
          "https://code-projects.org/wp-content/uploads/2020/01/Capture-2.png"
        }
        link="https://github.com/rubendaluz/Zoo-Management-System"
        link_text="Project Repositorie"
        description="Zoo Management System"
      />
    </div>
  );
}

export { ProjectSection };
