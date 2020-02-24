
import React from "react";
import Photo from "./Images/portfolio.PNG"
import "../src/Home.css"
import FadeIn from 'react-fade-in'



class Home extends React.Component {
    render() {
       return (
         <div>
             <h1>Hello World</h1>
             <FadeIn className="fade">
             <img className="me" src={Photo} alt="Smiley face"/>
             </FadeIn>

         </div>
       )
    }
 }
 export default Home;