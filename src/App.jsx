import Appbar from "./components/Appbar/Appbar";
import BackgroundLottie from "./components/BackgroundLottie/BackgroundLottieImg";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="parent">
      <Appbar />
      <Home />
      <BackgroundLottie />
    </div>
  );
}

export default App;
