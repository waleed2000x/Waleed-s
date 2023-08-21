import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import BackgroundLottie from "../../../Assets/Lotties/BackgroundLottie.json";

export default function BackgroundLottieImg() {
  const [showLottie, setShowLottie] = useState(false);

  useEffect(() => {
    // Delay showing the Lottie animation after 5 seconds
    const timer = setTimeout(() => {
      setShowLottie(true);
    }, 5000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showLottie && (
        <div className="backgroundLottie">
          <Lottie animationData={BackgroundLottie} loop={false} />
        </div>
      )}
    </>
  );
}
