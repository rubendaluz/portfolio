import React from "react";
import { SocialIcon } from "./socialicon.js";
import github_img from "./img/github.png";
import linkedin_img from "./img/linkedin.png";
import { Button } from "./button.js";

function Presentation() {
  return (
    <div className="presentation">
      <div className="presentation_text">
        <h3>Hi, I'm</h3>
        <h1>Rúben da Luz</h1>
        <span>
          I am a Junior FullStack Developer, studying Networks and Computer
          Systems Engeneering. I have build user friendly and robust projects.
        </span>
        <Button
          buttonLink="mailto:rubendaluz684@gmail.com"
          buttonText="HIRE ME"
          buttonId="hire_me_button"
        />
      </div>
      <div className="socials">
        <SocialIcon image={github_img} link="https://github.com/rubendaluz" />
        <SocialIcon
          image={linkedin_img}
          link="https://www.linkedin.com/in/rubendaluz/"
        />
      </div>
    </div>
  );
}

export { Presentation };
