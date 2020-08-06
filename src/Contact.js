
import React from "react";
import "../src/Contact.css"
import Resume from "./Images/resume.png"
import Linkedin from "./Images/in.png"
import Gmail1 from "./Images/gmail1.png"
// import Phone from "./Images/download.png"


class Contact extends React.Component {
    render() {
       return (
         <div>
          <p className="contact-info">Contact</p>
          <div className="icon-links">
          <a href="https://docs.google.com/document/d/1wRfM49cLTbUNqYaeiy1Chg6CMhvRXJDwxg7Bd19MWso/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><img className="resume" src={Resume} alt="resume"/></a>     
          {/* <a href="tel:703-973-7366" ><img className="phone" src={Phone} alt="phone"/> </a>     */}
          <a href="https://www.linkedin.com/in/mamadysillah/" target="_blank" rel="noopener noreferrer"><img className="linkedin" src={Linkedin} alt="Linkedin"/> </a>
          <a href="mailto:mamady310@gmail.com" target="_blank" rel="noopener noreferrer"><img className="gmail" src={Gmail1} alt="Linkedin"/> </a>
          </div>

         </div>
       )
    }
 }
 export default Contact;