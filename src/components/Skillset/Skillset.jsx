import { Slider } from "@mui/material";
import { Element } from "react-scroll";
import Html from "./Images/Html.png";
import CSS from "./Images/CSS.png";
import JS from "./Images/JS.avif";
import ReactLottie from "../Home/HomeLotties/ReactLottie";
import Node from "./Images/Node.png";
import SCSS from "./Images/SCSS.png";
import Bootstrap from "./Images/Bootstrap.png";
import MUI from "./Images/MUI.png";
import Firebase from "./Images/Firebase.png";
import Strapi from "./Images/Strapi.webp";
import Framer from "./Images/Framer.png";

export default function Skillset() {
  return (
    <Element name="skills" className="skillsetParent">
      <div
        className="skillsetTitle"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <p>Skill Set</p>
      </div>
      <div className="slidersParent">
        <div className="sliders" data-aos="fade-right" data-aos-duration="1000">
          <div className="sliderTitle">
            <p>HTMLh</p>
            <div className="imageSkill">
              <img src={Html} alt="HTML" />
            </div>
          </div>
          <Slider color="warning" value={95} valueLabelDisplay="auto" />
        </div>
        <div className="sliders" data-aos="fade-left" data-aos-duration="1000">
          <div className="sliderTitle">
            <p>CSS</p>
            <div className="imageSkill">
              <img src={CSS} alt="CSS" />
            </div>
          </div>
          <Slider color="info" value={85} valueLabelDisplay="auto" />
        </div>
        <div className="sliders" data-aos="fade-right" data-aos-duration="1000">
          <div className="sliderTitle">
            <p>JavaScript</p>
            <div className="imageSkill">
              <img style={{ borderRadius: "50%" }} src={JS} alt="JS" />
            </div>
          </div>
          <Slider
            style={{ color: "yellow" }}
            value={80}
            valueLabelDisplay="auto"
          />
        </div>
        <div className="sliders" data-aos="fade-left" data-aos-duration="1000">
          <div className="sliderTitle">
            <p>Bootstrap</p>
            <div className="imageSkill">
              <img src={Bootstrap} alt="JS" />
            </div>
          </div>
          <Slider
            style={{ color: "purple" }}
            value={90}
            valueLabelDisplay="auto"
          />
        </div>
        <div className="sliders" data-aos="fade-right" data-aos-duration="1000">
          <div className="sliderTitle">
            <p>React</p>
            <div className="imageSkill">
              <ReactLottie />
            </div>
          </div>
          <Slider value={90} valueLabelDisplay="auto" />
        </div>
        <div className="sliders" data-aos="fade-left" data-aos-duration="1000">
          <div className="sliderTitle">
            <p>Node</p>
            <div className="imageSkill">
              <img src={Node} alt="JS" />
            </div>
          </div>
          <Slider color="success" value={70} valueLabelDisplay="auto" />
        </div>
        <div className="sliders" data-aos="fade-right" data-aos-duration="1000">
          <div className="sliderTitle">
            <p>Material UI</p>
            <div className="imageSkill">
              <img src={MUI} alt="JS" />
            </div>
          </div>
          <Slider value={70} valueLabelDisplay="auto" />
        </div>
        <div className="sliders" data-aos="fade-left" data-aos-duration="1000">
          <div className="sliderTitle">
            <p>SCSS</p>
            <div className="imageSkill">
              <img src={SCSS} alt="JS" />
            </div>
          </div>
          <Slider
            style={{ color: "pink" }}
            value={90}
            valueLabelDisplay="auto"
          />
        </div>
        <div className="sliders" data-aos="fade-right" data-aos-duration="1000">
          <div className="sliderTitle">
            <p>Firebase</p>
            <div className="imageSkill">
              <img src={Firebase} alt="JS" />
            </div>
          </div>
          <Slider
            style={{ color: "yellow" }}
            value={50}
            valueLabelDisplay="auto"
          />
        </div>
        <div className="sliders" data-aos="fade-left" data-aos-duration="1000">
          <div className="sliderTitle">
            <p>Strapi</p>
            <div className="imageSkill">
              <img src={Strapi} alt="JS" />
            </div>
          </div>
          <Slider
            style={{ color: "#9074ff" }}
            value={95}
            valueLabelDisplay="auto"
          />
        </div>
        <div className="sliders" data-aos="fade-right" data-aos-duration="1000">
          <div className="sliderTitle">
            <p>Framer Motion</p>
            <div className="imageSkill">
              <img src={Framer} alt="JS" />
            </div>
          </div>
          <Slider color="info" value={70} valueLabelDisplay="auto" />
        </div>
      </div>
    </Element>
  );
}
