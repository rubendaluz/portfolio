import React, {useState} from 'react';
import { AnchorButton } from "./menubutton.js";

const Menu = ({ setActiveSection }) => {
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (section) => {
    setActiveSection(section);
    setActiveButton(section);
  };

  return (
    <div>
      <div className="menu">
        <ul>
          <AnchorButton
            anchorId="about_link"
            anchorText="ABOUT"
            targetSection="about_me_page"
            onClick={handleButtonClick}
            isActive={activeButton === 'about_me_page'}
          />
          <AnchorButton
            anchorId="cv_link"
            anchorText="RESUME / CV"
            targetSection="skills_page"
            onClick={handleButtonClick}
            isActive={activeButton === 'skills_page'}
          />
          <AnchorButton
            anchorId="portfolio_link"
            anchorText="PORTFOLIO"
            targetSection="projects_page"
            onClick={handleButtonClick}
            isActive={activeButton === 'projects_page'}
          />
          <AnchorButton
            anchorId="contact_me_link"
            anchorText="CONTACT ME"
            targetSection="contact_page"
            onClick={handleButtonClick}
            isActive={activeButton === 'contact_page'}
          />
        </ul>
      </div>
    </div>
  );
};

export default Menu;