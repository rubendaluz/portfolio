import React from "react";
import { SkillCard } from "./skillcard.js";
import html_img from "./img/html.png";
import css3_img from "./img/css3.png";
import javascript_img from "./img/javascript.png";
import java_img from "./img/java.png";
import node_img from "./img/node.png";
import react_img from "./img/react.png";
import mysql_img from "./img/my-sql.png";
import python_img from "./img/python.png";
import c_img from "./img/c++.png";

function SkillSection() {
  return (
    <div className="skills_section">
      <SkillCard name="HTML" image={html_img} />
      <SkillCard name="CSS" image={css3_img} />
      <SkillCard name="JavaScript" image={javascript_img} />
      <SkillCard name="React" image={react_img} />
      <SkillCard name="Node JS" image={node_img} />
      <SkillCard name="Java" image={java_img} />
      <SkillCard name="C++" image={c_img} />
      <SkillCard name="My SQL" image={mysql_img} />
      <SkillCard name="Python" image={python_img} />
    </div>
  );
}

export { SkillSection };
