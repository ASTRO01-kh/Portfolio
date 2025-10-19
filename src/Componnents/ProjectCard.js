import Cardbtn from "./Cardbtn";
import "../Styles/ProjectCard.css";

const roundedImageStyle = {
  borderRadius: "50%", // Creates a circular shape
};
function ProjectCard(props) {
  return (
    <div className="Container">
      <div className="ProjectCard">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        />
        <div className="left">
          <img
            className="projectlogo"
            src={props.logo} // Replace with the actual URL or path to your image
            alt="projectlogo" // Provide a meaningful alt text for accessibility
            style={roundedImageStyle}
          />
          <p id="title">{props.title}</p>
          <p id="year">{props.year}</p>
          <p id="detail">{props.detail}</p>
         {/* <Cardbtn
            btntext="See more about the  project"
            icon="fa-solid fa-arrow-right-long"
          />
          */} 
          
        </div>
        <div className="right">
          <img
            className="projectpic"
            src={props.img} // Replace with the actual URL or path to your image
            alt="projectpic" // Provide a meaningful alt text for accessibility
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
