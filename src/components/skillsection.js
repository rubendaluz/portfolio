import React from "react";


function SkillSection() {
  return (
    <div className="skills_section">
      <Header />
      <Certifications />
      <Skills />
      <Education />
      <Projects />
    </div>
  );
}

export { SkillSection };

const Header = () => (
  <div className="Skills_header">
    <h1>Rúben da Luz</h1>
  </div>
);

const Certifications = () => (
  <div>
    <h2>Certifications</h2>
    <hr></hr>
    <ul>
      <li>Cisco CCNA</li>
      <li>Cisco Introduction to Cybersecurity</li>
    </ul>
  </div>
);

const Skills = () => (
  <div>
    <h2>Skills</h2>
    <hr></hr>
    <p>HTML | CSS | JavaScript | React | Node.Js | Express.Js | MySQL | SQL | C | Java | Python | Git | C++ | Arduino C | AWS | EC2 | Cloud Computing | Network Security | Network Design | C# | Unity | Game Development | MathLab | Cloud Computing | Network Security | Network Design | Windows Server | Active Directory | Azure | VMware ESXi | SAN | NAS</p>
  </div>
);

const Education = () => (
  <div>
    <h2>Education</h2>
    <hr></hr>
    <p>Bachelor Degree, IPVC, Viana do Castelo, PT 2021-2024</p>
    <p>Networks and Computer Systems Engineering</p>
  </div>
);

const Projects = () => (
  <div>
    <h2>Projects</h2>
    <hr></hr>
    <div>
      <h3>Multimodal Authentication System with RFID/NFC and Biometrics</h3>
      <p>Development of an advanced authentication system using RFID/NFC technologies for device identification and biometrics for identity verification, carried out as part of the Project 1 course in the Bachelor's degree. The project involved the integration of hardware and software to ensure security and accessibility.</p>
    </div>
    <div>
      <h3>Microsoft Environment Management Project (February 2023)</h3>
      <ul>
        <li>Set up a virtual lab using Windows Server and Azure.</li>
        <li>Configured Active Directory for managing users, groups, and policies.</li>
        <li>Implemented Group Policy Objects (GPOs) for centralized management.</li>
        <li>Integrated Azure services for hybrid cloud solutions.</li>
      </ul>
    </div>
    <div>
      <h3>Automatic Inventory System Using UHF-RFID (June 2024)</h3>
      <li>Developed an automatic inventory system utilizing UHF-RFID technology.</li>
      <li>Designed and implemented the system to improve inventory management efficiency.</li>
      <li>Ensured accuracy in inventory tracking and data reporting.</li>
    </div>
    <div>
      <h3>VMware and Storage Optimization Project (June 2024)</h3>
      <li>Designed and implemented a virtualized environment using VMware ESXi.</li>
      <li>Set up SAN/NAS storage solutions for efficient data management.</li>
      <li>Focused on optimizing performance and ensuring data redundancy.</li>
      <li>Developed and tested backup and disaster recovery strategies.</li>
    </div>
    <div>
      <h3>Comprehensive IT Infrastructure Enhancement for PowerWind (June 2024)</h3>
      <li>Conducted a detailed evaluation of PowerWind's current IT infrastructure.</li>
      <li>Identified areas needing improvement or increased integration.</li>
      <li>Performed an in-depth analysis of hardware, software, and connectivity needs.</li>
      <li>Aligned requirements with PowerWind's operational and security objectives.</li>
      <li>Developed a robust, scalable, and adaptable network architecture.</li>
      <li>Focused on solutions for LAN and WAN. Integrated best practices in security and operational efficiency.</li>
    </div>
  </div>
);