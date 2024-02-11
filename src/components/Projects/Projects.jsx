import { Element } from "react-scroll";
import CarMed from "./Images/CarMed.png";
import Nexus from "./Images/Nexus.png";
import PropertyPort from "./Images/PropertyPort.png";
import Viventa from "./Images/Viventa.png";
import Project from "./Project";
export default function Projects() {
  return (
    <Element name="projects" className="projectParent">
      <div className="projectTitle" data-aos="zoom-in" data-aos-duration="1000">
        <p>My Projects</p>
      </div>
      <div className="projects">
        <Project
          title="CarMed"
          Image={CarMed}
          Link="https://carmed.onrender.com/"
          Fade="fade-right"
        />
        <Project
          title="The nexus"
          Image={Nexus}
          Link="https://www.thenexushotelapartments.com/"
          Fade="fade-right"
        />
      </div>

      <div className="projects">
        <Project
          title="Property Port"
          Image={PropertyPort}
          Link="https://propertyport.vercel.app/"
          Fade="fade-left"
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
