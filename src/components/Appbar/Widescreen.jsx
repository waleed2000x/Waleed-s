import { Link } from "react-scroll";
import { motion } from "framer-motion";
export default function Widescreen() {
  return (
    <div className="wideAppbarParent">
      <motion.h1
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        Waleed Ahmed
      </motion.h1>
      <div className="appbarItems">
        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <Link to="projects" smooth={true}>
            Projects
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <Link to="skills" smooth={true}>
            Skills
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <Link to="resume" smooth={true}>
            Resume
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <Link to="contact" smooth={true}>
            Contact
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
