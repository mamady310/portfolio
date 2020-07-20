import React from "react";
import Picture from "./Images/portfolio.PNG"
import "../src/About.css"




class About extends React.Component {
    render() {
       return (
         <div className="container">
            <img className="aboutme" src={Picture} alt="Smiley face"/>
            <div className="content">
              <h1>About Me...</h1>
              <p className="journey ">My journey started after I left the Navy. I was looking to start a new career in tech. I am DIY by nature so the appeal of building practical applications from with lines of code was intriguing to me. I then decided to pursue an in person immersive program in software development. The experience has been challenging and rewarding. After the program I was left with a sense of accomplishment and a desire to advance my skillset. </p>
            </div>
         </div>
       )
    }
 }
 export default About;