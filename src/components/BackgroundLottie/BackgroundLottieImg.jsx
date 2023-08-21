import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import BackgroundLottie from "../../../Assets/Lotties/BackgroundLottie.json";

export default function BackgroundLottieImg() {
  const [showLottie, setShowLottie] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLottie(true);
    }, 3000);

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
