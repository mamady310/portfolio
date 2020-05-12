import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Projects extends Component {

    openMock() {
        window.open("https://breweries-back.herokuapp.com/")
    }

    openModal() {
        window.open("https://github.com/mamady310/contact-book")
    }

    openSimon() {
        window.open("https://fakecontacts.now.sh/")
    }

    render() {
        return (
            <div className="projects-container">
                <h1>My Projects</h1>
                <div className="project1">
                    <h4>My First Project</h4>
                    <Link onClick={this.openMock}>
                        <img className="projects" src={Project1}></img>
                    </Link>
                  <p>
                  <p className="words">Mongo DB | Express.js <br />In this project I built a JSON API pulling data from an existing brewery API. I created my data model, seeded the raw data from the API, and then the information was then stored in my database. There is a create functionality that allows a user to add information using postman.</p>
                  </p>
                </div>
                <div className="project2" >
                    <h4>UI-Modal Project</h4>
                    <Link onClick={this.openModal}>
                        <img className="projects" src={Shark}></img>
                    </Link>
                </div>
                <div className="project3" >
                    <h4>Simon Game</h4>
                    <Link onClick={this.openSimon}>
                        <img className="projects" src={Simon}></img>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Projects;