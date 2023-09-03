import ContactLottie from "./contactLottie";
import { Element } from "react-scroll";
export default function Contact() {
  return (
    <Element name="contact" className="contactParent">
      <div className="lottieContact">
        <ContactLottie />
      </div>
      <div className="contactForm">
        <div className="leftContact">
          <div className="contactTitle">
            <p>Contact .</p>
          </div>
        </div>
        <div className="rightContact"></div>
      </div>
    </Element>
  );
}
