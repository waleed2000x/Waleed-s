import { useState, useEffect } from "react";
import Smallscreen from "./Smallscreen";
import Widescreen from "./Widescreen";

export default function Appbar() {
  const [showSmall, setShowSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowSmall(window.innerWidth <= 600);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{showSmall ? <Smallscreen /> : <Widescreen />}</>;
}
