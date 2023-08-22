/* eslint-disable react/no-unescaped-entities */
import { Element } from "react-scroll";
import AboutLottie from "../Home/HomeLotties/AboutLottie";

export default function About() {
  return (
    <Element name="aboutScroll" className="aboutMe">
      <div className="aboutLottie">
        <AboutLottie />
      </div>
      <h1>Frontend React Developer</h1>
      <p>
        I'm a passionate front-end React developer with a knack for turning
        designs into engaging web experiences. Proficient in HTML, CSS, and
        JavaScript, I specialize in creating responsive interfaces using React.
        With a keen eye for detail and a focus on user-centered design, I'm
        dedicated to crafting seamless and performant applications that
        captivate users. Let's collaborate to bring your ideas to life and
        create memorable digital solutions.
      </p>
    </Element>
  );
}
