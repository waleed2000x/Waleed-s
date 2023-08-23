import { Element } from "react-scroll";

export default function Projects() {
  return (
    <Element name="projects" className="projectParent">
      <div className="projectTitle" data-aos="zoom-in" data-aos-duration="1000">
        <p>Here we have some ptojects</p>
      </div>
      <div className="projects">
        <p>Carmed</p>
        <p>Property Port</p>
        <p>Nutrimatch</p>
        <p>Vibe Vault</p>
      </div>
    </Element>
  );
}
