/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
export default function Project({ title, Image, Link, Fade }) {
  return (
    <motion.div
      data-aos={Fade}
      data-aos-duration="2000"
      className="project"
      whileHover={{ scale: 1.5 }}
    >
      <h1>{title}</h1>
      <img src={Image} alt="CarMed" />
      <a href={Link} target="blank">
        View Project
      </a>
    </motion.div>
  );
}
