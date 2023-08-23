import { Link } from "react-scroll";
import About from "../About/About";
import ComputerLottie from "./HomeLotties/ComputerLottie";
import ReactLottie from "./HomeLotties/ReactLottie";
import TabletLottie from "./HomeLotties/TabletLottie";
import AboutLottie from "../About/AboutLottie";
import MouseParallax from "./Mouse Parallax/MouseParralax";
import Skillset from "../Skillset/Skillset";
import Projects from "../Projects/Projects";

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
        <MouseParallax />
        <div className="rightLotties">
          <Link
            to="aboutScroll"
            className="aboutSection"
            smooth={true}
            duration={1000}
          >
            <div className="aboutNavigator">
              <AboutLottie />
            </div>
          </Link>
          <div className="reactLotties">
            <ReactLottie />
          </div>
        </div>
      </div>
      <About />
      <Skillset />
      <Projects />
    </div>
  );
}
