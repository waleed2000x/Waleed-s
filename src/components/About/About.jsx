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
        That's an excellent introduction and overview of your skills and passion
        as a front-end React developer! It effectively highlights your
        proficiency and dedication in turning designs into engaging web
        experiences. The mention of your expertise in HTML, CSS, JavaScript, and
        React, along with your ability to create responsive interfaces,
        showcases your technical abilities. The emphasis on user-centered design
        and creating seamless, performant applications demonstrates your
        commitment to providing a high-quality user experience.
      </p>
      <p style={{ marginTop: "0px" }}>
        Additionally, my capabilities in working with tools like Strapi and
        Firebase add a valuable layer to my skill set, allowing to build dynamic
        and database-driven web applications. Mentioning collaboration and
        bringing ideas to life shows enthusiasm for teamwork and creativity.
      </p>
    </Element>
  );
}
