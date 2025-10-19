import "../Styles/Process.css";
import work from "/Users/s/Desktop/React apps/Portfolio/src/images/Work.png";

function Process() {
  return (
    <div className="Process">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
      />
      <div className="Process-Title">
        <p id="Title">Process & methodology :</p>
        <p id="Subtitle">“How i work”</p>
        <img
            className="work-img"
            src={work} // Replace with the actual URL or path to your image
            alt="Adobe Xd logo" // Provide a meaningful alt text for accessibility
          />
      </div>
    </div>
  );
}

export default Process;
