import "../Styles/Proexperience.css";
import Weoneit from "/Users/s/Desktop/React apps/Portfolio/src/images/Weoneit.png";

function Proibnisina(props) {
  return (
    <div className="ProexperienceContainer">
      <div className="Proexperience">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        />
           
        <div className="Ibnsinadetails">
        <div className="Ibnsinaleft">
          <img
            className="Ibnsinalogo"
            src={props.companylogo2} // Replace with the actual URL or path to your image
            alt="IbnisinaComlogo" // Provide a meaningful alt text for accessibility
          />
        </div>
        <div className="Ibnsinaright">
          <p className="ibnsinadetails">{props.exptext2}
          </p>
         </div>
        </div>

      </div>
    </div>
  );
}

export default Proibnisina;
