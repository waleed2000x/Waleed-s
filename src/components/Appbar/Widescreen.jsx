import { Link } from "react-scroll";
import { motion } from "framer-motion";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
export default function Widescreen() {
  return (
    <div className="wideAppbarParent">
      <motion.h1
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <span className="left-animation">&lt;</span>
        Waleed Ahmed
        <span className="right-animation">&nbsp;/&gt;&nbsp;</span>
      </motion.h1>
      <div className="appbarItems">
        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <Link to="skills" smooth={true} duration={1500}>
            Skills
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <Link to="projects" smooth={true} duration={2000}>
            Projects
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <Link to="contact" smooth={true} duration={2500}>
            Contact
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <Link
            to="resume"
            smooth={true}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: "100px",
            }}
          >
            Resume
            <DownloadRoundedIcon
              style={{
                marginTop: "5px",
              }}
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
