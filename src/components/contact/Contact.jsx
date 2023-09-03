import { TextField } from "@mui/material";
import ContactLottie from "./contactLottie";
import { Element } from "react-scroll";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    function _turnstileCb(response) {
      console.debug("Turnstile verification response:", response);
    }
    const script = document.createElement("script");
    script.src =
      "https://www.cloudflare.com/cdn-cgi/scripts/4Wq6W6J1/cloudflare-static/turnstile.min.js";
    script.async = true;
    script.onload = () => {
      window.turnstile.render("#myWidget", {
        sitekey: "0x4AAAAAAAJovBJuxtfEvcgQ",
        theme: "light",
        callback: _turnstileCb,
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
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
            {/* Add the Turnstile CAPTCHA widget container */}
            <div id="myWidget" className="cf-turnstile"></div>
          </div>
        </div>
        <div className="rightContact"></div>
      </div>
    </Element>
  );
}
