import ComputerLottie from "./HomeLotties/ComputerLottie";
import TabletLottie from "./HomeLotties/TabletLottie";

export default function Home() {
  return (
    <div className="homeParent">
      <div className="leftLotties">
        <div className="computerLotties">
          <ComputerLottie />
        </div>
        <div className="tabletLotties">
          <TabletLottie />
        </div>
      </div>
    </div>
  );
}
