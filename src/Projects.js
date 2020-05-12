
import React from "react";
import "../src/Projects.css";
import Breweries1 from "../src/Images/breweries1.png";
import Contact from "../src/Images/contactbook.jpg";
import Person from "../src/Images/contact.png"


class Projects extends React.Component {

  
    render() {
       return (
         <div>
             <p className="projects">Projects</p>
             <div className="projs">
              <div className="proj1">
             <a href="https://breweries-back.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img className="photo" src={Breweries1} alt="Heroku"/> </a>
             <p className="words">Mongo DB | Express.js <br />In this project I built a JSON API pulling data from an existing brewery API. I created my data model, seeded the raw data from the API, and then the information was then stored in my database. There is a create functionality that allows a user to add information using postman.</p>
             </div>
             <div className="proj2">
             <a href="https://github.com/mamady310/contact-book" target="_blank" rel="noopener noreferrer"><img className="photo" src={Contact} alt="Heroku"/> </a>
             <p className="words"> Python | PSQL | PeeWee <br />This is a contact book that I created using command line prompts. A user has the ability to show, create, delete, and update contacts. The backend is complete and in the future may add a front end.
             </p>
             </div>
             <div className="proj3">
             <a href="https://fakecontacts.now.sh/" target="_blank" rel="noopener noreferrer"><img className="photo" src={Person} alt="Contacts"/> </a>
             <p className="words"> React.Js <br />I did an API fetch to return an array of objects that returned contact information. I mapped trhough object to display name and email of each contact. I also created a search function to allow a search for contacts by their name. 
             </p>
             </div>
           </div>  
           <footer></footer>
         </div>
       )
    }
 }
 export default Projects;