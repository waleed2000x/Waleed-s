import { Slider } from "@mui/material";
import { Element } from "react-scroll";
import Html from "./Images/html.svg";
import CSS from "./Images/CSS.png";
import JS from "./Images/JS.avif";
import ReactLottie from "../Home/HomeLotties/ReactLottie";
import Next from "./Images/next.svg";
import NextAuth from "./Images/nextauth.png";
import Mongo from "./Images/mongo.svg";
import Express from "./Images/express.svg";
import Node from "./Images/Node.png";
import SCSS from "./Images/SCSS.png";
import Bootstrap from "./Images/Bootstrap.png";
import MUI from "./Images/MUI.png";
import ChakraUI from "./Images/chakra.png";
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
            <p>HTML</p>
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
            value={95}
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
            <p>Next</p>
            <div className="imageSkill">
              <img
                src={Next}
                style={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  border: "2px solid black",
                }}
                alt="JS"
              />
            </div>
          </div>
          <Slider
            style={{ color: "white" }}
            value={70}
            valueLabelDisplay="auto"
          />
        </div>
        <div className="sliders" data-aos="fade-left" data-aos-duration="1000">
          <div className="sliderTitle">
            <p>Node</p>
            <div className="imageSkill">
              <img src={Node} alt="JS" />
            </div>
          </div>
          <Slider color="success" value={90} valueLabelDisplay="auto" />
        </div>
        <div className="sliders" data-aos="fade-left" data-aos-duration="1000">
          <div className="sliderTitle">
            <p>Express</p>
            <div className="imageSkill">
              <img src={Express} alt="JS" />
            </div>
          </div>
          <Slider
            style={{ color: "grey" }}
            value={80}
            valueLabelDisplay="auto"
          />
        </div>
        <div className="sliders" data-aos="fade-left" data-aos-duration="1000">
          <div className="sliderTitle">
            <p>Mongo DB</p>
            <div className="imageSkill">
              <img src={Mongo} alt="JS" />
            </div>
          </div>
          <Slider
            style={{ color: "green" }}
            value={90}
            valueLabelDisplay="auto"
          />
        </div>
        <div className="sliders" data-aos="fade-left" data-aos-duration="1000">
          <div className="sliderTitle">
            <p>NextAuth</p>
            <div className="imageSkill">
              <img src={NextAuth} alt="NexuAuth" />
            </div>
          </div>
          <Slider
            style={{ color: "green" }}
            value={90}
            valueLabelDisplay="auto"
          />
        </div>
        <div className="sliders" data-aos="fade-right" data-aos-duration="1000">
          <div className="sliderTitle">
            <p>Material UI</p>
            <div className="imageSkill">
              <img src={MUI} alt="JS" />
            </div>
          </div>
          <Slider value={90} valueLabelDisplay="auto" />
        </div>
        <div className="sliders" data-aos="fade-right" data-aos-duration="1000">
          <div className="sliderTitle">
            <p>Chakra UI</p>
            <div className="imageSkill">
              <img src={ChakraUI} alt="chakraUI" />
            </div>
          </div>
          <Slider value={80} valueLabelDisplay="auto" />
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
