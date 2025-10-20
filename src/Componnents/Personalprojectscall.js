import Branding from "../images/branding.png";
import Brandinglogo from "../images/brandinglogo.png";
import Wesselni from "../images/wesselni.png";
import Wesselnilogo from "../images/wesselnilogo.png";
import ProjectCard from "./ProjectCard";

function Personalprojectscall() {
    return (
      <div >
        <p id="hometitle">Personal projects</p>
<ProjectCard
        title="Branding website"
        year="Ui & Ux Design - 2023"
        detail="With this platform, you can easily design all the assets
        you need to build a strong brand you'll save time and
        money on design work, while creating urbrand identity."
        logo={Brandinglogo}
        img={Branding}
      />
      <ProjectCard
        title="Transportation app"
        year="Ui & Ux Design - 2022"
        detail="A comprehensive transportation application designed to
        optimize travel expenses by facilitating ride-sharing
        among individuals following similar routes."
        logo={Wesselnilogo}
        img={Wesselni}
      />
      </div>
    );
  }
  
  export default Personalprojectscall;