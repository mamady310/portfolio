
import React from "react";
// import Photo from "./Images/portfolio.PNG";
import "../src/Home.css";
// import FadeIn from 'react-fade-in';
import TypedWords from './TypedWords';
import { DiPython, DiJavascript } from 'react-icons/di';
import { FaHtml5, FaReact } from 'react-icons/fa';
import { DiJavascript1, DiMongodb, DiNodejs, DiPostgresql} from 'react-icons/di';



class Home extends React.Component {
    render() {
       return (
         <div className="home-content">
           <div className='intro'>
            <TypedWords />
            <div className="icons">
             <DiPostgresql size='5rem'/>
             <DiPython size='5rem' />
             <FaHtml5 size='5rem'/>
             <FaReact size='5rem'/>
             <DiJavascript1 size='5rem'/>
             <DiMongodb size='5rem'/>
             <DiNodejs size='5rem'/>
             <DiJavascript size='5rem'/>
           </div>
           </div>
         </div>
       )
    }
 }
 export default Home;

 //old code 
       {/* <div className="content">
             <FadeIn className="fade">
             <img className="me" src={Photo} alt="Smiley face"/>
             </FadeIn>
             <div className="intro">
               <p className="title">Mamady Sillah</p>
               <h2 className="sub">Web Developer  |  Northern Virginia</h2>
             </div>
             </div> */}