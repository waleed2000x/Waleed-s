import React from "react";
import Lottie from "lottie-react";
import AboutLotties from "./AboutLotties.json";
export default function AboutLottie() {
  return <Lottie animationData={AboutLotties} loop={true} />;
}
