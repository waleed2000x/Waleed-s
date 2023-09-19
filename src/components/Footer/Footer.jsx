import { motion } from "framer-motion";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";

export default function Footer() {
  return (
    <div className="footerParent">
      <motion.h1
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <span className="left-animation">&lt;</span>
        Waleed Ahmed
        <span className="right-animation">&nbsp;/&gt;&nbsp;</span>
      </motion.h1>
      <div className="socialIcons">
        <motion.div
          whileHover={{ scale: "1.1" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <InstagramIcon />
        </motion.div>
        <motion.div
          whileHover={{ scale: "1.1" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <LinkedInIcon />
        </motion.div>
        <motion.div
          whileHover={{ scale: "1.1" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <MailIcon />
        </motion.div>
      </div>
    </div>
  );
}
