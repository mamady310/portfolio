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
              <p className="journey ">My journey started after I left the Navy. I was looking to start a new career and had a strong interest in tech. After a few youtube videos and codealongs I decided to pursue an in person immersive program in web development. The experience has been challenging and rewarding. After the program I was left with a sense of accomplishment and a desire to advance my skillset. I am very excuted to start a new journey in tech. </p>
            </div>
         </div>
       )
    }
 }
 export default About;