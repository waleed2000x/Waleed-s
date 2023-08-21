import { Link } from "react-scroll";
export default function Widescreen() {
  return (
    <div className="wideAppbarParent">
      <h1>Waleed Ahmed</h1>
      <div className="appbarItems">
        <Link to="projects" smooth={true}>
          Projects
        </Link>
        <Link to="skill" smooth={true}>
          Skills
        </Link>
        <Link to="resume" smooth={true}>
          Resume
        </Link>
        <Link to="contact" smooth={true}>
          Contact
        </Link>
      </div>
    </div>
  );
}
