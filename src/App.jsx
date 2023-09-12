import Appbar from "./components/Appbar/Appbar";
import BackgroundLottie from "./components/BackgroundLottie/BackgroundLottieImg";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="parent">
      <Appbar />
      <Home />
      <BackgroundLottie />
      <Footer />
    </div>
  );
}

export default App;
