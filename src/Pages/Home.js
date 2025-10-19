import Topbar from "../Componnents/Topbar";
import Welcoming from "../Componnents/Welcoming";
import Homebtn from "../Componnents/Homebtn";
import Skills from "../Componnents/Skills";
import Education from "../Componnents/Education";
import Projectscall from "../Componnents/Projectscall";
import Personalprojectscall from "../Componnents/Personalprojectscall";
import Proexperience from "../Componnents/Proexperience";
import Proibnisina from "../Componnents/Proibnisina";
import Homeweoneitbtn from "../Componnents/Homeweoneitbtn";
import Process from "../Componnents/Process";
import Contact from "../Componnents/Contact";
import Weoneit from "../images/Weoneit.png";
import Ibnisina from "../images/ibnisina.png";
import Download from "../Componnents/Download";

import Footer from "../Componnents/Footer";

import "../Styles/App.css";
<link rel="icon" href="%PUBLIC_URL%/favicon.png" type="image/png" />


function Home() {
  return (
    <div>
      <Topbar />
      <Welcoming />
      <Projectscall />
      <Homebtn btntext="See all projects" />
      <Skills />
      <Education />
      {/* <Download
        firsticon="fa-regular fa-file-pdf"
        btntext="Download Resume"
        secondicon="fa-solid fa-download"
      /> */}
      <Personalprojectscall />
      <Proexperience 
        exptext="I was fortunate enough to work as a UI/UX designer with the esteemed
        Weoneit team for a fruitful five-month contract. I was introduced to
        a dynamic work atmosphere and experienced individuals in the design
        and development sectors, together with efficient managerial
        supervision, throughout this enlightening encounter. The team's
        combined experience helped me advance professionally and gave me
        vital insight into the complexities of modern design techniques."
        companylogo={Weoneit}

      />
      <Homeweoneitbtn
        btntext="Visit Weoneit website"
        secondicon="fa-solid fa-angle-right"
        url="https://www.instagram.com/weoneitdz/"
      />
       <Proibnisina 
       exptext2="As an ongoing UI/UX designer freelancer with Ibnisina Com, I continue
       to have the privilege of collaborating with a talented team. Immersed in a 
       dynamic work environment, I interact daily with seasoned professionals in 
       design and development. Under effective managerial guidance, I am continually
       gaining valuable experience and enhancing my skills. This ongoing experience
       not only fosters my professional growth but also provides ongoing insights into 
       contemporary design methodologies."
       companylogo2={Ibnisina}
       />
       <Homeweoneitbtn
        btntext="Visit Ibnisina Com website"
        secondicon="fa-solid fa-angle-right"
        url="https://www.ibnisinacom.com/"
      />
      <Process />
      <Contact />
      
      <Footer />
    </div>
  );
}

export default Home;
