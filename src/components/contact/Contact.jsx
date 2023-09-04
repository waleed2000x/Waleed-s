import { TextField } from "@mui/material";
import ContactLottie from "./contactLottie";
import { Element } from "react-scroll";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    function _turnstileCb(response) {
      console.debug("Turnstile verification response:", response);
    }

    const loadTurnstileScript = () => {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        window.turnstile.render(".cf-turnstile", {
          sitekey: "0x4AAAAAAAJovBJuxtfEvcgQ", // Replace with your sitekey
          theme: "light",
          callback: _turnstileCb,
          mode: "interactive",
        });
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    };

    loadTurnstileScript();
  }, []);

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
            {/* The Turnstile CAPTCHA widget will be rendered inside this div */}
            <div className="cf-turnstile"></div>
          </div>
        </div>
        <div className="rightContact"></div>
      </div>
    </Element>
  );
}
