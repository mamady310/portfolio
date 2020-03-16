
import React from "react";
import Photo from "./Images/portfolio.PNG"
import "../src/Home.css"
import FadeIn from 'react-fade-in'



class Home extends React.Component {
    render() {
       return (
         <div>
             {/* <h1 className="hello">Hello World</h1> */}
             <div className="content">
             <FadeIn className="fade">
             <img className="me" src={Photo} alt="Smiley face"/>
             </FadeIn>
             <div className="intro">
               <p className="title">Mamady Sillah</p>
               <h2 className="sub">Web Developer  |  Northern Virginia</h2>
             </div>

             </div>

         </div>
       )
    }
 }
 export default Home;