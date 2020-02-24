import React from "react";
import Picture from "./Images/portfolio.PNG"
import "../src/About.css"




class About extends React.Component {
    render() {
       return (
         <div className="container">
            <img className="aboutme" src={Picture} alt="Smiley face"/>
            <div className="content">
              <h1>You may be wondering how I got here...</h1>
              <p>My journey started after my adventures in the Navy ended. I had difficulty finding employment and was now looking for a new career that would most likely require school. I knew that I wanted to work in the tech industry and that is what led me to web design. A few YouTube videos and Udemy courses later I decided web design was the way to go. I loved seeing my code come to life and some of the creative problem solving needed to come up with a beautiful product.</p>

              <p>After much research I decided that a bootcamp would be my best path. The experience of a bootcamp has been very rewarding and very challenging. I have learned many technical and soft skills that I have employed to apply to individual and group projects. One of my favorite projects was creating a full stack application and deploying my website.</p>

              <p>My biggest takeaway from the program was that this is a dynamic industry that requires a love of continuous learning and knowing that I have to be very flexible with changing technologies. I am very excited to start the next chapter in a new career solving problems  one line of code at a time. </p>
            </div>
         </div>
       )
    }
 }
 export default About;