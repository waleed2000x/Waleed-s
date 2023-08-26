import { Element } from "react-scroll";
import CarMed from "./Images/CarMed.png";
import VibeVault from "./Images/VibeVault.png";
import PropertyPort from "./Images/PropertyPort.png";
import Viventa from "./Images/Viventa.png";
import Project from "./Project";
export default function Projects() {
  return (
    <Element name="projects" className="projectParent">
      <div className="projectTitle" data-aos="zoom-in" data-aos-duration="1000">
        <p>Here we have some projects</p>
      </div>
      <div className="projects">
        <Project
          title="CarMed"
          Image={CarMed}
          Link="https://carmed.onrender.com/"
          Fade="fade-right"
        />
        <Project
          title="Property Port"
          Image={PropertyPort}
          Link="https://propertyport.netlify.app/"
          Fade="fade-left"
        />
      </div>

      <div className="projects">
        <Project
          title="Vibe Vault"
          Image={VibeVault}
          Link="https://vibevault.netlify.app/"
          Fade="fade-right"
        />
        <Project
          title="Viventa"
          Image={Viventa}
          Link="https://viventa.netlify.app/"
          Fade="fade-left"
        />
      </div>
    </Element>
  );
}
