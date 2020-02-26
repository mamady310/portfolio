
import React from "react";
import "../src/Contact.css"
import Linkedin from "./Images/linkedin.png"
import Gmail1 from "./Images/gmail1.png"
import Github from "./Images/github.png"
import Phone from "./Images/iphone.jpeg"


class Contact extends React.Component {
    render() {
       return (
         <div>
          <h1 className="contact-info">Contact Me</h1>
          <div className="icon-links">
          <a href="tel:703-973-7366" ><img className="phone" src={Phone} alt="phone"/> </a>    
          <a href="https://www.linkedin.com/in/mamadysillah/" target="_blank"><img className="linkedin" src={Linkedin} alt="Linkedin"/> </a>
          <a href="mailto:mamady310@gmail.com" target="_blank"><img className="gmail" src={Gmail1} alt="Linkedin"/> </a>
          <a href="https://github.com/mamady310?tab=repositories" target="_blank"><img className="git" src={Github} alt="Github"/> </a>
          </div>

         </div>
       )
    }
 }
 export default Contact;