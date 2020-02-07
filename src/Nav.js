
import React from "react";
import { Link } from "react-router-dom";
import "../src/Nav.css"


class Nav extends React.Component {
    render() {
       return (
          <nav>
            <ul className="nav-links">
                <Link to="/"><li>Home</li></Link>
                <Link to="/Name"> <li>About</li></Link>
                <Link to="/City"><li>Projects</li></Link>
                <Link to="/Contact"><li>Contact</li></Link>
                
            </ul>

          </nav>
       )
    }
 }
 export default Nav;