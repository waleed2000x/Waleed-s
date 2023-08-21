import Lottie from "lottie-react";
import AboutMe from "./AboutMe.json";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function AboutLottie() {
  return (
    <div className="aboutMeLottie">
      <Lottie animationData={AboutMe} loop={true} />
      <h2>
        Get to know me! Click
        <ArrowUpwardIcon />
      </h2>
    </div>
  );
}
