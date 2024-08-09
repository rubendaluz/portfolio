import React from "react";

import icon_email from "./img/icon_email.png"
import icon_linkedin from "./img/linkedin.png"
import icon_github from "./img/github.png"
import pic from "./img/linkedin_img.jpg"

function Presentation() {
  return (
    <div className="presentation">
      <div className="presentation_top">
        <img id="profile_pic" src={pic} alt=""></img>
        <h1>Rúben da Luz</h1>
        <p>Networks & Computer Systems Engineer</p>
        <br></br>
        <hr></hr>
      </div>
      <div className="contacts">
        <div className="contact">
          <div className="contact_icon_section">
            <img className="icon_img" src={icon_email} alt=""></img>
          </div>
          <div className="contact_info">
          <p>Email</p>
          <p>rubendaluz684@gmail.com</p>
          </div>
        </div>

        <div className="contact">
          <div className="contact_icon_section">
            <img className="icon_img" src={icon_linkedin} alt=""></img>
          </div>
          <div className="contact_info">
          <p>Linkedin</p>
          <p>rubendaluz684@gmail.com</p>
          </div>
        </div>

        <div className="contact">
          <div className="contact_icon_section">
            <img className="icon_img" src={icon_github} alt=""></img>
          </div>
          <div className="contact_info">
          <p>Github</p>
          <p>rubendaluz684@gmail.com</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export { Presentation };
