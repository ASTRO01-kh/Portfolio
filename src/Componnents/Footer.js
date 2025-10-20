import MyImage from "../images/profile.PNG";
import gmailpic from "../images/gmail.png";
import linkedinpic from "../images/linkedin.png";
import whatsapppic from "../images/whatsapp.png";
import instagrampic from "../images/instagram.png";

import "../Styles/Footer.css";

const roundedImageStyle = {
  borderRadius: "50%", // Creates a circular shape
};
function Footer() {
  return (
    <div className="footer">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
      />

      <div>
        <img
        onClick={() => window.location.href='/about'}
          className="profile"
          src={MyImage} // Replace with the actual URL or path to your image
          alt="profile" // Provide a meaningful alt text for accessibility
          style={roundedImageStyle}
        />
        <div className="contacts">
          <p className="description">
            UI/UX Designer & Computer Scientist. Blending tech and design
            for seamless digital experiences. 🚀
          </p>
          <div className="contactsbtn">
            <img
              className="emailbtn"
              src={gmailpic} // Replace with the actual URL or path to your image
              alt="mail" // Provide a meaningful alt text for accessibility
              style={roundedImageStyle}
              onClick={() =>window.open('mailto:astrokh2002@gmail.com','_blank')}
              
            />
            <img
              className="linkedinbtn"
              src={linkedinpic}
              alt="linkedin"
              style={roundedImageStyle}
              onClick={() =>window.open('https://www.linkedin.com/in/akram-khedir-667592218/','_blank')}

            />
            <img
              className="whatsappsbtn"
              src={whatsapppic}
              alt="whatsapp"
              style={roundedImageStyle}
              onClick={() =>window.open('https://wa.me/+14383407105?text=hello','_blank')}

            />
            <img
              className="instagrambtn"
              src={instagrampic}
              alt="instagram"
              style={roundedImageStyle}
              onClick={() =>window.open('https://www.instagram.com/ast.rokh/','_blank')}
            />
          </div>
        </div>
        <p className="signatur">Designed and devloped by AKRAM KHEDIR</p>
        <p className="rights">© 2025 . All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
