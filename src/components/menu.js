import React from "react";
import { AnchorButton } from "./menubutton.js";

function Menu() {
  return (
    <div className="menu">
      <ul>
        <AnchorButton
          anchorId="about_link"
          anchorText="ABOUT"
          targetSection="about_me_page"
        />

        <AnchorButton
          anchorId="skills_link"
          anchorText="SKILLS"
          targetSection="skills_page"
        ></AnchorButton>

        <AnchorButton
          anchorId="portfolio_link"
          anchorText="PORTFOLIO"
          targetSection="projects_page"
        ></AnchorButton>

        <AnchorButton
          anchorId="contact_me_link"
          anchorText="CONTACT ME"
          targetSection="contact_page"
        ></AnchorButton>
      </ul>
    </div>
  );
}

export { Menu };
