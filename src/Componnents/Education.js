import Masterlogo from "../images/Master.png";
import Licencelogo from "../images/Licence.png";
import Baclogo from "../images/Bac.png";

import "../Styles/Education.css";

function Education() {
  return (
    <div className="Education">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
      />
      <p id="hometitle">Education </p>
      <div className="Educontainer">
        <div className="Master">
          <img
            className="degre-img"
            src={Masterlogo} // Replace with the actual URL or path to your image
            alt="Degre image" // Provide a meaningful alt text for accessibility
          />
          <div>
            <p id="degre">Master's degree Master in Computer Science</p>
            <p id="specialité">
              Software Engineering and Information Processing
            </p>
          </div>
          <p id="degyear">2024</p>
        </div>

        <div className="Licence">
          <img
            className="degre-img"
            src={Licencelogo} // Replace with the actual URL or path to your image
            alt="Degre image" // Provide a meaningful alt text for accessibility
          />
          <div>
            <p id="degre">Bachelor's degree in Computer Science</p>
            <p id="specialité">specializing in Computer Systems</p>
          </div>
          <p id="degyear">2022</p>
        </div>

        <div className="Bac">
          <img
            className="degre-img"
            src={Baclogo} // Replace with the actual URL or path to your image
            alt="Degre image" // Provide a meaningful alt text for accessibility
          />
          <div>
            <p id="degre">Baccalaureate</p>
            <p id="specialité">Series: Mathematical Technique</p>
          </div>
          <p id="degyear">2019</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
