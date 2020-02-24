import React, {} from 'react';
import './App.css';
// import { BrowserRouter as Router, Switch} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home"
import Nav from "../src/Nav"
import About from "../src/About"
function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/About" exact component={About}/>
        {/* <Route path="/Projects" exact component={Projects}/>
        <Route path="/Contact" exact component={Contact}/> */}
        
      </Switch>

    </div>
    </Router>
  );
}

export default App;
