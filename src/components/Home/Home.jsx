/* eslint-disable react/no-unescaped-entities */
import AboutLottie from "./HomeLotties/AboutLottie";
import ComputerLottie from "./HomeLotties/ComputerLottie";
import ReactLottie from "./HomeLotties/ReactLottie";
import TabletLottie from "./HomeLotties/TabletLottie";

export default function Home() {
  return (
    <div className="homeParent">
      <div className="homeLottiesParent">
        <div className="leftLotties">
          <div className="computerLotties">
            <ComputerLottie />
          </div>
          <div className="tabletLotties">
            <TabletLottie />
          </div>
        </div>
        <div className="rightLotties">
          <div className="reactLotties">
            <ReactLottie />
          </div>
        </div>
      </div>
      <div className="aboutMe">
        <div className="aboutLottie">
          <AboutLottie />
        </div>
        <h1>Frontend React Developer</h1>
        <p>
          I'm a passionate front-end React developer with a knack for turning
          designs into engaging web experiences. Proficient in HTML, CSS, and
          JavaScript, I specialize in creating responsive interfaces using
          React. With a keen eye for detail and a focus on user-centered design,
          I'm dedicated to crafting seamless and performant applications that
          captivate users. Let's collaborate to bring your ideas to life and
          create memorable digital solutions.
        </p>
        <div className="aboutIcons"></div>
      </div>
    </div>
  );
}
