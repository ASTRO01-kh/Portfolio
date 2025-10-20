import left from "../images/left.png";
import right from "../images/right.png";
import localisation from "../images/localisation.png";

import "../Styles/Welcoming.css";

function Welcoming() {
  return (
    <div className="container">
      <img
        class="abs"
        id="left"
        src={left} // Replace with the actual URL or path to your image
        alt="projectlogo" // Provide a meaningful alt text for accessibility
      />
      <img
        class="abs"
        id="right"
        src={right} // Replace with the actual URL or path to your image
        alt="right" // Provide a meaningful alt text for accessibility
      />
      <p id="hey">Hi, i'am Akram.</p>
      <div class="wilaya">
        <img
          className="localisation" 
          src={localisation} // Replace with the actual URL or path to your image
          alt="projectlogo" // Provide a meaningful alt text for accessibility
        />
        <p id="loc">Montréal, Quebec, Canada</p>
      </div>
      <p id="ui">
        UI/UX Designer & Computer Science Student. Blending tech and design for
        seamless digital experiences. 🚀
      </p>
    </div>
  );
}

export default Welcoming;
