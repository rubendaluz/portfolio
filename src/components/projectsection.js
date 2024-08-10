import React, { useState } from "react";
import { ProjectCard } from "./projectcard.js";
import screenshot_wapp from "./img/Screenshot_WAPP.png";
import screenshot_p2 from "./img/P2.png";
import screenshot_hackers from "./img/hackers.png";
import iot from "./img/iot.png";
import wazuh from "./img/wazuh.png";
import multiaccess from "./img/multiaccess.png";
import smartlib from "./img/smartlib.png";
import proxmox from "./img/proxmox.png";
import secure from "./img/secure.png";


function ProjectSection() {
    const [selectedType, setSelectedType] = useState('All');

  const filteredProjects = selectedType === 'All'
    ? projects
    : projects.filter(project => project.type === selectedType);

  return (
    <div>
      <div className="title_container">
        <h2 className="title">Portfolio</h2>
      </div>
      <div className="filter_menu">
        <button
          className={selectedType === 'All' ? 'active' : ''}
          onClick={() => setSelectedType('All')}
        >
          All
        </button>
        <button
          className={selectedType === 'Mobile Application' ? 'active' : ''}
          onClick={() => setSelectedType('Mobile Application')}
        >
          Mobile Application
        </button>
        <button
          className={selectedType === 'IoT' ? 'active' : ''}
          onClick={() => setSelectedType('IoT')}
        >
          IoT
        </button>
        <button
          className={selectedType === 'Networking' ? 'active' : ''}
          onClick={() => setSelectedType('Networking')}
        >
          Networking
        </button>
        <button
          className={selectedType === 'Web Development' ? 'active' : ''}
          onClick={() => setSelectedType('Web Development')}
        >
          Web Development
        </button>
      </div>
      <div className="projects_container">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            screenshot={project.screenshot}
            link={project.link}
            link_text={project.link_text}
            description={project.description}
          />
        ))}
      </div>
    </div>
  ); 
}

const projects = [
  {
    type: 'Web Development',
    screenshot: multiaccess,
    link: 'https://github.com/rubendaluz/Projeto1---R-R',
    link_text: 'Multi-Access Auth System',
    description: '',
  },
  {
    type: 'Web Development',
    screenshot: screenshot_wapp,
    link: 'https://rubendaluz.github.io/Projeto_WheatherApp/',
    link_text: 'Wheather App',
    description: '',
  },
  {
    type: 'IoT',
    screenshot: screenshot_p2,
    link: '',
    link_text: 'UHF-RFiD and CV based indoor location System',
    description: '',
  },
  {
    type: 'Mobile Application',
    screenshot: smartlib,
    link: '',
    link_text: 'SmartLib App',
    description: '',
  },
  {
    type: 'Networking',
    screenshot: wazuh,
    link: '',
    link_text: 'SIEM with Wazuh',
    description: '',
  },
  {
    type: 'Networking',
    screenshot: screenshot_hackers,
    link: 'https://github.com/rubendaluz/Hackers-Activity-on-the-Internet',
    link_text: 'Hackers Activity on the Internet',
    description: '',
  },
  {
    type: 'Networking',
    screenshot: proxmox,
    link: 'https://github.com/rubendaluz/VMware-and-Storage-Optimization-Project',
    link_text: 'HA cluster with Proxmox',
    description: '',
  },
  {
    type: 'IoT',
    screenshot: iot,
    link: '',
    link_text: 'IoT Security System',
    description: '',
  },
  {
    type: 'Web Development',
    screenshot: secure,
    link: 'https://github.com/rubendaluz/Windows-Quick-Security-Analyser',
    link_text: 'Windows Security Analyser',
    description: '',
  }
];

export { ProjectSection };
