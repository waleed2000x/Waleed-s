import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./scss/index.css";
import AOS from "aos";
import "aos/dist/aos.css"; //AOS INITIALIZATION

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
