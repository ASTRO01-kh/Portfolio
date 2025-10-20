import '../Styles/About.css';
import Footer from "../Componnents/Footer";
import Contact from "../Componnents/Contact";
import AboutMe from "../images/About.png";


function About(){
return <div className="about">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div className="top">
    {/* <button className="btn-menu"><i class="fa-solid fa-bars fa-xl"></i></button> */}
   <button className="btn-back"onClick={() => window.location.href='/'}><i class="fa-solid fa-arrow-left-long"></i></button>
   </div>
   <div className="Container1">
   <img src={AboutMe} alt="About Me" className="center-image" />
   </div>
   <p className='hi'>Hi again! </p>
   <p className='par1'>I'm a <b>UI/UX designer</b> and a <b>computer science engineer</b> living in Canada, passionate about how people and software can work together to make life better. I currently work as a freelancer, where I design mobile apps, websites, and extension interfaces with a user-friendly experience. </p>
   <p className='par2'>I previously worked at <b>Weoneit</b>, where I designed experiences and interfaces to help users get their needs easily. I started on the graphic design side, honing my visual design skills and learning the ins and outs of design, then moved into the world of UI/UX.</p>
   <p className='par3'>I also had the privilege of collaborating as a UI/UX designer freelancer with <b>Ibnisina Com</b>, a French company. During this experience, I enjoyed being part of a collaborative environment, working closely with developers, attending meetings with clients, and coordinating with the HR team. This opportunity not only helped me strengthen my design skills but also allowed me to grow in communication, teamwork, and cross-functional collaboration within a professional setting.</p>
   <p className='par3'>As a UI/UX designer, I enjoy playing a variety of roles and showcasing my proficiency in prototyping and craft mastery. I place a high value on visually appealing images that are informed by intelligent systems theory. I find it really compelling that a digital interface may be thought of as a dynamic thing that is capable of changing and growing.</p>
   <p className='par4'>Aside from my passion for design, I adore the outdoors, the gym, and football. I enjoy the rush of athletics, whether I'm at the gym or rooting for my favorite football teams. I love to spend my weekends in the great outdoors, camping under the stars. In the middle of all this, I enjoy the small things in life, like delicious cuisine, talking about civil engineering ideas, and spending time with my cat Casper.</p>
   <p className='par5'>If you want to chat, feel free to <b>reach out.</b></p>
   
   <Contact />
   <Footer />

      </div>
}

export default About;