import Figmalogo from "../images/Figmalogo.png";
import Xdlogo from "../images/xdlogo.png";
import Sketchlogo from "../images/sketchlogo.png";

import "../Styles/Skills.css";

const roundedImageStyle = {
  borderRadius: "50%", // Creates a circular shape
};
function Skills() {
  return (
    <div className="Skills">
      <p id="hometitle">Skills</p>
      <div className="row">
        <div className="Figma">
          <img
            className="skill-img"
            src={Figmalogo} // Replace with the actual URL or path to your image
            alt="Figma logo" // Provide a meaningful alt text for accessibility
            style={roundedImageStyle}
          />
          <p id="skill-name">Figma</p>
        </div>
        <div className="Xd">
          <img
            className="skill-img"
            src={Xdlogo} // Replace with the actual URL or path to your image
            alt="Adobe Xd logo" // Provide a meaningful alt text for accessibility
            style={roundedImageStyle}
          />
          <p id="skill-name">Adobe Xd</p>
        </div>
        <div className="Sketch">
          <img
            className="skill-img"
            src={Sketchlogo} // Replace with the actual URL or path to your image
            alt="Sketch logo" // Provide a meaningful alt text for accessibility
            style={roundedImageStyle}
          />
          <p id="skill-name">Sketch</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
