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
        Passionate about front-end development, I specialize in bringing designs
        to life as a React developer. Proficient in HTML, CSS, JavaScript, and
        React, I seamlessly translate concepts into engaging web experiences. My
        commitment to user-centered design ensures the creation of high-quality,
        responsive interfaces, while my dedication to performance guarantees the
        delivery of seamless applications. Elevate your digital presence with my
        expertise in turning ideas into captivating, user-friendly realities.
      </p>
      <p style={{ marginTop: "0px" }}>
        Additionally, my capabilities in working with tools like Strapi,
        NextAuth, MUI, AWS and Firebase add a valuable layer to my skill set,
        allowing to build dynamic and database-driven web applications.
        Mentioning collaboration and bringing ideas to life shows enthusiasm for
        teamwork and creativity.
      </p>
    </Element>
  );
}
