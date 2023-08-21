import { Link } from "react-scroll";
import About from "../About/About";
import ComputerLottie from "./HomeLotties/ComputerLottie";
import ReactLottie from "./HomeLotties/ReactLottie";
import TabletLottie from "./HomeLotties/TabletLottie";
import { Tooltip } from "@mui/material";
import AboutLottie from "../About/AboutLottie";

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
          <Link
            to="aboutScroll"
            className="aboutSection"
            smooth={true}
            duration={500}
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
    </div>
  );
}
