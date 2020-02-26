
import React from "react";
import "../src/Projects.css"
import Breweries1 from "../src/Images/breweries1.png"
import Breweries2 from "../src/Images/breweries2.png"


class Projects extends React.Component {
    render() {
       return (
         <div>
             <h1 className="projects">Projects</h1>
             <div className="projs">
             <a href="https://breweries-back.herokuapp.com/" target="_blank"><img className="breweries1" src={Breweries1} alt="Heroku"/> </a>
             <a href="https://breweries-front-f8n2fca6h.now.sh/" target="_blank"><img className="breweries1" src={Breweries2} alt="Heroku"/> </a>
             </div>
           

         </div>
       )
    }
 }
 export default Projects;