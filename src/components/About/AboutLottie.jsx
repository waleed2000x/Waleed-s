import Lottie from "lottie-react";
import AboutMe from "./AboutMe.json";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function AboutLottie() {
  return (
    <div className="aboutMeLottie">
      <Lottie animationData={AboutMe} loop={true} />
      <p>Get to know me!</p>
      <h6>
        Click
        <ArrowUpwardIcon />
      </h6>
    </div>
  );
}
