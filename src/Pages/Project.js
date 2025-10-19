import "../Styles/About.css";
import AlienLogo from "/Users/s/Desktop/React apps/Portfolio/src/images/alien.png";
import Forceinfologo from "/Users/s/Desktop/React apps/Portfolio/src/images/forceinfologo.png";
import Avendrelogo from "/Users/s/Desktop/React apps/Portfolio/src/images/A vendre logo.png";
import Aakaratilogo from "/Users/s/Desktop/React apps/Portfolio/src/images/Aakarati logo.png";
import Casalogo from "/Users/s/Desktop/React apps/Portfolio/src/images/Casa logo.png";
import Feneclogo from "/Users/s/Desktop/React apps/Portfolio/src/images/Fenec logo.png";
import Laquilogo from "/Users/s/Desktop/React apps/Portfolio/src/images/Laqui logo.png";
import Letsmeetlogo from "/Users/s/Desktop/React apps/Portfolio/src/images/Let's meet logo.png";
import Lockimmologo from "/Users/s/Desktop/React apps/Portfolio/src/images/Lockimmo logo.png";
import Mitavisorlogo from "/Users/s/Desktop/React apps/Portfolio/src/images/Mitavisor logo.png";
import Vacariouslogo from "/Users/s/Desktop/React apps/Portfolio/src/images/Vacarious logo.png";
import Tracingvoiceslogo from "/Users/s/Desktop/React apps/Portfolio/src/images/Tracingvoices logo.png";

import Aline from "/Users/s/Desktop/React apps/Portfolio/src/images/Aline.png";
import Nftex from "/Users/s/Desktop/React apps/Portfolio/src/images/nftextention.png";
import Vacarious from "/Users/s/Desktop/React apps/Portfolio/src/images/Vacarious.png";
import LittleFenec from "/Users/s/Desktop/React apps/Portfolio/src/images/littlefenec.png";
import CasaWeb from "/Users/s/Desktop/React apps/Portfolio/src/images/Casa web.png";
import CasaApp from "/Users/s/Desktop/React apps/Portfolio/src/images/casa.png";
import Laqui from "/Users/s/Desktop/React apps/Portfolio/src/images/Laqui dashboard.png";
import Aakarati from "/Users/s/Desktop/React apps/Portfolio/src/images/Aakarati.png";
import Avendre from "/Users/s/Desktop/React apps/Portfolio/src/images/A vendre.png";
import Donation from "/Users/s/Desktop/React apps/Portfolio/src/images/Donation website.png";
import Metavisor from "/Users/s/Desktop/React apps/Portfolio/src/images/Metavisor.png";
import Lockimmo from "/Users/s/Desktop/React apps/Portfolio/src/images/Lockimmo.png";
import Meet from "/Users/s/Desktop/React apps/Portfolio/src/images/letsmeet.png";
import Forceinfo from "/Users/s/Desktop/React apps/Portfolio/src/images/forceinfo.png";

import ProjectCard from "../Componnents/ProjectCard";
import Footer from "../Componnents/Footer";
import Topbar2 from "../Componnents/Topbar2";
import Welcoming2 from "../Componnents/Welcoming2";

function Project() {
  return (
    <div>
      <Topbar2 />
      <Welcoming2 />

      <ProjectCard
        title="Cryptocurrency Mobile App"
        year="Ui & Ux Design - 2022"
        detail=" A comprehensive mobile app that provides real-time cryptocurrency prices, market
         trends, news, and analysis, offering users all essential tools to stay informed and manage
          their digital assets effectively."
        logo={AlienLogo}
        img={Aline}
      />
      <ProjectCard
        title="Real Estate App"
        year="Ui & Ux Design - 2023"
        detail="A smart real estate app that streamlines buying, selling, and renting by handling 
        all legal steps for you. Easily connect with sellers or owners and manage your property
         deals with confidence. "
        logo={Casalogo}
        img={CasaApp}
      />

      <ProjectCard
        title="Family And Friends Meeting App"
        year="Ui & Ux Design - 2024"
        detail="An app that helps families and friends easily plan meetups in suitable public places.
         It suggests venues and simplifies coordinating everyone’s availability. "
        logo={Letsmeetlogo}
        img={Meet}
      />
      <ProjectCard
        title="Interactive Learning & Communication Platform"
        year="Ui & Ux Design - 2025"
        detail="An educational app with cartoon series and a school hub, featuring a parent side and a kid side.
        It helps track schedules, connect parents in class groups, and organize events together. "
        logo={Feneclogo}
        img={LittleFenec}
      />
      <ProjectCard
        title="LOCKimmo App"
        year="Ui & Ux Design - 2025"
        detail="The État des lieux facile app by LOCKimmo lets you quickly perform digital property inspections,
         including photos, e-signatures, and automatic delivery to tenants and owners. "
        logo={Lockimmologo}
        img={Lockimmo}
      />
      <ProjectCard
        title="Real Estate Application"
        year="Ui & Ux Design - 2023"
        detail="A mobile app for posting and managing real estate listings in Algeria, allowing users to browse,
         create, and manage property ads efficiently. "
        logo={Aakaratilogo}
        img={Aakarati}
      />
      <ProjectCard
        title="NFTs Web Extension "
        year="Ui & Ux Design - 2022"
        detail="A complete NFTs web extension, this extension give you
        the capability to buy and trade nfts with a simple and 
        easy way."
        logo={AlienLogo}
        img={Nftex}
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
        title="Travel Website with AI Chat to Find Your Perfect Trip"
        year="Ui & Ux Design - 2024"
        detail="Vacayrious is a travel platform that uses AI to provide personalized trip suggestions,
         book flights and activities, and help users plan adventures effortlessly. "
        logo={Vacariouslogo}
        img={Vacarious}
      />

      <ProjectCard
        title="LAQUI Dashboard"
        year="Ui & Ux Design - 2023"
        detail="Laqui is a ride-hailing platform in Algeria offering safe rides with female drivers,
         empowering women to drive and earn independently. "
        logo={Laquilogo}
        img={Laqui}
      />
      <ProjectCard
        title="E-commerce Using Blockchain Website"
        year="Ui & Ux Design - 2024"
        detail="A modern e-commerce platform that enables users to purchase products
         like clothing, perfume, and jewelry using Ethereum, while partnering with major
          brands for exclusive collaborations. "
        logo={Mitavisorlogo}
        img={Metavisor}
      />

      <ProjectCard
        title="E-commerce Website"
        year="Ui & Ux Design - 2024"
        detail="A thorough online store for computer goods that includes servers,
         network devices, laptops, printers, and other accessories. "
        logo={Forceinfologo}
        img={Forceinfo}
      />
      <ProjectCard
        title="Selling and renting Cars website"
        year="Ui & Ux Design - 2023"
        detail="A secure website that allows users to buy or rent cars, offering easy
         listings, verified transactions, and a safe, seamless experience for both buyers and renters. "
        logo={Avendrelogo}
        img={Avendre}
      />
      <ProjectCard
        title="Art & Social Impact Platform"
        year="Ui & Ux Design - 2023"
        detail="An online platform showcasing short documentaries that highlight artists and activists,
         sharing their stories and the causes they care about. "
        logo={Tracingvoiceslogo}
        img={Donation}
      />

      <Footer />
    </div>
  );
}

export default Project;
