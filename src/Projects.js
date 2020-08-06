
import React from "react";
import "../src/Projects.css";
import Breweries1 from "../src/Images/breweries1.png";
import Contact from "../src/Images/contactbook.jpg";
import Person from "../src/Images/contacts.png";
import Hotel from "../src/Images/hotel.png";
import { GoMarkGithub } from 'react-icons/go'


class Projects extends React.Component {

  
    render() {
       return (
         <div>
             <p className="projects">Projects</p>
             <div  className="projs">
              <div className="proj1">
             <a href="https://breweries-back.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img className="photo" src={Breweries1} alt="Heroku"/> </a>
             <p className="words">Mongo DB | Express.js <br />I built a RESTful API using data from an existing API. I created a model schema that allowed me to create JSON data of breweries in Virginia. A user can manually add information to my backend using Postman. <br />
             <a href="https://github.com/mamady310/breweries" target="_blank" rel="noopener noreferrer"><GoMarkGithub size='2rem' /></a>
             </p>
             </div>
             <div className="proj2">
             <a href="https://github.com/mamady310/contact-book" target="_blank" rel="noopener noreferrer"><img className="photo" src={Contact} alt="Heroku"/> </a>
             <p className="words"> Python | PSQL | PeeWee <br />This is a contact book that I created using command line prompts. A user has the ability to show, create, delete, and update information of their contacts.<br />
             <a href="https://github.com/mamady310/contact-book" target="_blank" rel="noopener noreferrer"><GoMarkGithub size='2rem' /></a>
             </p>
             </div>
             <div className="proj3">
             <a href="https://fakecontacts.now.sh/" target="_blank" rel="noopener noreferrer"><img className="photo" src={Person} alt="Contacts"/> </a>
             <p className="words"> React.Js <br />I did an API fetch for contact information and rendered the names and emails. I also created a search function to allow a search for contacts by their name. <br />
             <a href="https://github.com/mamady310/fakecontacts" target="_blank" rel="noopener noreferrer"><GoMarkGithub size='2rem' /></a>
             </p>
             </div>
             <div className="proj4">
             <a href="https://hotel-rooms-three.vercel.app/rooms" target="_blank" rel="noopener noreferrer"><img className="photo" src={Hotel} alt="Netlify"/> </a>
             <p className="words">React.js <br />This project allows a user to find their ideal hotel using certain search parameters. I shared methods globally using react context instead of the traditional prop drilling from parent to child.  <br />
             <a href="https://github.com/mamady310/hotel-rooms" target="_blank" rel="noopener noreferrer"><GoMarkGithub size='2rem' /></a>
             </p>
             </div>
           </div>  
           <footer></footer>
         </div>
       )
    }
 }
 export default Projects;