import { Button, TextField } from "@mui/material";
import ContactLottie from "./contactLottie";
import { Element } from "react-scroll";
import { useEffect } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";

const ContactSchema = Yup.object({
  fullname: Yup.string().min(2).required("Name is a required field"),
  email: Yup.string()
    .email()
    .min(4)
    .max(35)
    .required("Email is a required field"),
  message: Yup.string().max(200).required("Message is a required field"),
});

const iValues = {
  fullname: "",
  email: "",
  message: "",
};
export default function Contact() {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: iValues,
    validationSchema: ContactSchema,
    onSubmit: () => {
      resetForm();
      emailjs.send(
        "service_yijdw0n",
        "template_l4ekoov",
        {
          fullname: values.fullname,
          contact: values.contact,
          message: values.message,
          email: values.email,
        },
        "zcKF8sOM7vmxCXLng"
      );
    },
  });

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
          theme: "dark",
          callback: _turnstileCb,
          mode: "managed",
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
            <h1>Contact .</h1>
          </div>
          <div className="contactLeftInputs">
            <div className="leftInputs">
              <TextField
                variant="standard"
                label="Full Name"
                size="large"
                placeholder="Full Name"
                name="fullname"
                value={values.fullname}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.fullname}
                helperText={
                  errors.fullname && touched.fullname ? (
                    <p>{errors.fullname}</p>
                  ) : null
                }
              />
              <TextField
                variant="standard"
                label="Email"
                size="large"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                helperText={
                  errors.email && touched.email ? <p>{errors.email}</p> : null
                }
              />
            </div>
            <div className="cf-turnstile"></div>
          </div>
        </div>
        <div className="rightContact">
          <TextField
            id="outlined-multiline-flexible"
            label="Message"
            placeholder="Message"
            multiline
            variant="standard"
            maxRows={5}
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.message}
            helperText={
              errors.message && touched.message ? <p>{errors.message}</p> : null
            }
          />
          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={handleSubmit}
          >
            Send
          </Button>
        </div>
      </div>
    </Element>
  );
}
