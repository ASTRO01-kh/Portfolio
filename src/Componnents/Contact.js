import MyImage from "/Users/s/Desktop/React apps/Portfolio/src/images/profile.PNG";
import linkedinpic from "/Users/s/Desktop/React apps/Portfolio/src/images/linkedin.png";
import whatsapppic from "/Users/s/Desktop/React apps/Portfolio/src/images/whatsapp.png";
import instagrampic from "/Users/s/Desktop/React apps/Portfolio/src/images/instagram.png";
import React, { useRef, useState } from "react";
import "../Styles/Contact.css";
import emailjs from "@emailjs/browser";


function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_apevdlp", // Replace with your EmailJS Service ID
        "template_o9y9b5t", // Replace with your EmailJS Template ID
        form.current,
        "nnzfbQpAUiEi-QlvK"   // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setStatusType("success");
          form.current.reset();
        },
        (error) => {
          setStatus("Something went wrong. Try again!");
          setStatusType("error");
        }
      );
  };

const roundedImageStyle = {
  borderRadius: "50%", // Creates a circular shape
};
  return (
    <div className="Contact">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
      />
      <div className="Contact-Title">
        <p id="Contactitle">You have a project!?</p>
        <p id="Contact-subtitle">Be proactive and don't be bashful</p>
      </div>
      <div className="Contactcontainer">
        <div className="Contacts">
          <div className="Contact-left">
            <img
            onClick={() => window.location.href='/about'}
              className="Contact-profile"
              src={MyImage} // Replace with the actual URL or path to your image
              alt="profile" // Provide a meaningful alt text for accessibility
              style={roundedImageStyle}
            />
            <div className="Contacts-icons">
              <img
                className="Contact-linkedinbtn"
                src={linkedinpic}
                alt="linkedin"
                style={roundedImageStyle}
                onClick={() =>window.open('https://www.linkedin.com/in/akram-khedir-667592218/','_blank')}
              />
              <img
                className="Contact-whatsappsbtn"
                src={whatsapppic}
                alt="whatsapp"
                style={roundedImageStyle}
                onClick={() =>window.open('https://wa.me/+14383407105?text=hello','_blank')}
              
              />
              <img
                className="Contact-instagrambtn"
                src={instagrampic}
                alt="instagram"
                style={roundedImageStyle}
                onClick={() =>window.open('https://www.instagram.com/ast.rokh/','_blank')}
              />
            </div>
          </div>

          <div className="Contact-right">
          <form ref={form} onSubmit={sendEmail} className="contact-form">

          <input type="text" id="Name-input" name="user_name" placeholder="Your name here" required className="input-field" />
        <input type="email" id="mail-input" name="user_email" placeholder="Enter your email here" required className="input-field" />
        <textarea name="message" id="mail-input-details" placeholder="Write a quick mail here and let’s get started 🥰" required className="input-field"></textarea>

            <button type="submit" className="submit-btn">
              <i class="fa-regular fa-paper-plane fa-lg"></i>
            </button>
            </form>
            {status && (
              <p
                className={`status-message ${
                  statusType === "success" ? "success" : "error"
                }`}
              >
                {status}
              </p>
            )}          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
