import { TextField } from "@mui/material";
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
          <div className="contactLeftInputs">
            <TextField
              variant="standard"
              label="Full Name"
              size="large"
              placeholder="Full Name"
            />
            <TextField
              variant="standard"
              label="Email"
              size="large"
              placeholder="Email"
            />
            <div
              className="cf-turnstile"
              data-sitekey="0x4AAAAAAAJovBJuxtfEvcgQ"
            ></div>
          </div>
        </div>
        <div className="rightContact"></div>
      </div>
    </Element>
  );
}
