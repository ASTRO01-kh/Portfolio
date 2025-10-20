import "../Styles/Proexperience.css";

function Proexperience(props) {
  return (
    <div className="ProexperienceContainer">
      <div className="Proexperience">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        />
        <p id="hometitle">Professional experience </p>
        <div className="Weoneitdetails">
        <div className="weoneitleft">
          <img
            className="weoneitlogo"
            src={props.companylogo} // Replace with the actual URL or path to your image
            alt="Weoneitlogo" // Provide a meaningful alt text for accessibility
          />
        </div>
        <div className="weoneitright">
          <p className="weoneitdetails">{props.exptext}
          </p>
          
         </div>
        </div>

      </div>
    </div>
  );
}

export default Proexperience;
