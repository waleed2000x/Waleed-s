/* eslint-disable react/jsx-no-target-blank */
import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
const MouseParallax = () => {
  const handleMouseMove = (event) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const moveX = (event.clientX - centerX) / centerX;
    const moveY = (event.clientY - centerY) / centerY;

    const moveFactor = 10;

    const xMove = -moveX * moveFactor;
    const yMove = -moveY * moveFactor;

    const items = document.querySelectorAll(".moveable");
    items.forEach((item) => {
      item.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
  };

  const handleMouseLeave = () => {
    const items = document.querySelectorAll(".moveable");
    items.forEach((item) => {
      item.style.transform = "translate(0, 0)";
    });
  };

  return (
    <div
      className="aboutCenterParent"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="parallaxParent">
        <div className="moveable top">
          <Tooltip title="https://github.com/waleed2000x">
            <motion.div
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="parallaxIcon"
            >
              <a href="https://github.com/waleed2000x" target="_blank">
                <GitHubIcon />
              </a>
            </motion.div>
          </Tooltip>
        </div>
        <div className="moveable right">
          <Tooltip title="waleedahmed.x">
            <motion.div
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="parallaxIcon instagram"
            >
              <a
                href="https://www.instagram.com/waleedahmed.x/"
                target="_blank"
              >
                <InstagramIcon />
              </a>
            </motion.div>
          </Tooltip>
        </div>
        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="moveable bottom"
        >
          <Tooltip title="waleedahmed.x">
            <div className="parallaxIcon facebook">
              <a href="https://www.facebook.com/waleedahmed.x/" target="_blank">
                <FacebookIcon />
              </a>
            </div>
          </Tooltip>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="moveable left"
        >
          <Tooltip title="linkedin.com/in/waleedahmedx">
            <div className="parallaxIcon linkedin">
              <a
                href="https://www.linkedin.com/in/waleedahmedx"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
            </div>
          </Tooltip>
        </motion.div>
      </div>
    </div>
  );
};

export default MouseParallax;
