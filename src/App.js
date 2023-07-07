import "./App.css";
import { Menu } from "./components/menu.js";
import { Presentation } from "./components/presentation.js";
import { SkillSection } from "./components/skillsection.js";
import { ProjectSection } from "./components/projectsection.js";
import { Button } from "./components/button.js";

function App() {
  return (
    <div className="App">
      <div className="landing_page">
        <div className="App_header">
          <div></div>
          <Menu />
        </div>
        <Presentation />
      </div>
      <div className="about_me_page">
        <div className="my_face">
          <div className="profile_pic"></div>
        </div>
        <div className="aboutme_text">
          <div className="title_container">
            <span className="line"></span>
            <h2 className="title">About Me</h2>
          </div>

          <span>
            Hello! My name is Ruben and I am a passionate software developer
            with a love for creating innovative web applications. With a strong
            background in computer science, I enjoy turning ideas into tangible
            and user-friendly solutions.<br></br>
            <br></br>I have honed skills in HTML, CSS, and JavaScript, and have
            gained expertise in popular frameworks such as React.js and Node.js.
            I take pride in writing clean, efficient code and implementing best
            practices to ensure a smooth and responsive user experience.
            <br></br>
            <br></br>
            Collaboration and problem-solving are two values that I hold dear. I
            thrive in a team environment, where I can work closely with
            designers, product managers, and fellow developers to bring projects
            to life. I believe in the power of communication and actively seek
            feedback to continuously improve my work.<br></br>
            <br></br>
            When I'm not coding, you can find me exploring the great outdoors,
            reading a good book, or trying out new recipes in the kitchen. I
            believe in maintaining a healthy work-life balance to stay motivated
            and inspired.<br></br>
            <br></br>I am excited about the opportunity to contribute to
            impactful projects and collaborate with like-minded individuals. If
            you're looking for a dedicated developer who is driven to deliver
            high-quality solutions, I would love to connect and discuss how we
            can work together
          </span>
        </div>
      </div>
      <div className="skills_page">
        <div className="title_container">
          <span className="line"></span>
          <h2 className="title" id="skills_title">
            Skills
          </h2>
        </div>
        <SkillSection />
      </div>
      <div className="projects_page">
        <div className="title_container">
          <span className="line"></span>
          <h2 className="title">My Portfolio</h2>
        </div>
        <ProjectSection />
      </div>
      <div className="contact_page">
        <div className="conteiner">
          <div className="title_container">
            <h2 className="title">Get in Touch</h2>
          </div>
          <span>
            Hi, if you liked what you've seen, and you want to have a
            partnership with me, you can always contact me.
          </span>
          <Button
            buttonLink="mailto:rubendaluz684@gmail.com"
            buttonText="CONTACT ME"
            buttonId="contact_me_button"
          />
        </div>
      </div>
      <footer>
        <Menu />
      </footer>
    </div>
  );
}

export default App;
