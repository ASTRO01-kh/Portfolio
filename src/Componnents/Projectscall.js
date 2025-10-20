import MyImage from "../images/alien.png";
import Aline from "../images/Aline.png";
import Nftex from "../images/nftextention.png";
import CasaWeb from "../images/Casa web.png";
import Casalogo from "../images/Casa logo.png";

import ProjectCard from "./ProjectCard";

function Projectscall() {
  return (
    <div>
      <ProjectCard
        title="Cryptocurrency Mobile app"
        year="Ui & Ux Design - 2022"
        detail=" A comprehensive mobile app that provides real-time cryptocurrency prices, market trends,
         news, and analysis, offering users all essential tools to stay informed and manage their digital
          assets effectively."
        logo={MyImage}
        img={Aline}
      />
      <ProjectCard
        title="Real Estate Website"
        year="Ui & Ux Design - 2025"
        detail="A web platform that streamlines real estate sales and rentals by guiding users through
         all legal procedures. It also lets users contact sellers or owners directly and manage listings
         easily from any browser. "
        logo={Casalogo}
        img={CasaWeb}
      />
      <ProjectCard
        title="NFTs web extension "
        year="Ui & Ux Design - 2022"
        detail="A complete NFTs web extension, this extension give you
        the capability to buy and trade nfts with a simple and 
        easy way."
        logo={MyImage}
        img={Nftex}
      />
    </div>
  );
}

export default Projectscall;
