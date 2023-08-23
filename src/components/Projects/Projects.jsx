import { Element } from "react-scroll";
import { motion } from "framer-motion";
import CarMed from "./Images/CarMed.png";
import VibeVault from "./Images/VibeVault.png";
export default function Projects() {
  return (
    <Element name="projects" className="projectParent">
      <div className="projectTitle" data-aos="zoom-in" data-aos-duration="1000">
        <p>Here we have some ptojects</p>
      </div>
      <div className="projects">
        <motion.div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="project"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h1>CarMed</h1>
          <img src={CarMed} alt="CarMed" />
          <a href="https://carmed.onrender.com/" target="blank">
            View the Project
          </a>
        </motion.div>
        <motion.div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="project"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h1>Vibe Vault</h1>
          <img src={VibeVault} alt="CarMed" />
          <a href="https://vibevault.netlify.app/" target="blank">
            View the Project
          </a>
        </motion.div>
      </div>
      <div className="projects">
        <motion.div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="project"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h1>Property Port</h1>
          <img src="" alt="Comming Soon!!!" />
          <a href="https://carmed.onrender.com/" target="blank">
            View the Project
          </a>
        </motion.div>
        <motion.div
          className="project"
          data-aos="fade-left"
          data-aos-duration="2000"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h1>CarMed</h1>
          <img src={CarMed} alt="CarMed" />
          <a href="https://carmed.onrender.com/" target="blank">
            View the Project
          </a>
        </motion.div>
      </div>
    </Element>
  );
}
