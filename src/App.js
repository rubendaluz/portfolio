import "./App.css";
import React, { useState } from 'react';
import Menu from './components/menu.js';
import { Presentation } from "./components/presentation.js";
import { SkillSection } from "./components/skillsection.js";
import { ProjectSection } from "./components/projectsection.js";
import About from "./components/about.js";

function App() {
  const [activeSection, setActiveSection] = useState('skills_page');

  const renderContent = () => {
    switch (activeSection) {
      case 'about_me_page':
        return <About/>;
      case 'skills_page':
        return <SkillSection />;
      case 'projects_page':
        return <ProjectSection />;
      case 'contact_page':
        return <div>Contact Me Content</div>;
      default:
        return <div>About Me Content</div>;
    }
  };

  return (
    <div className="App">
      <div className="landing_page">
        <div className="left_container">
          <Presentation />
        </div>
        <div className="main_container">
          <Menu setActiveSection={setActiveSection} />
          <div className="content">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}



export default App;
