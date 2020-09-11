import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

function NavigationBar() {
  return (
    <div>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>BGU Hack</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Projects">Projects</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default NavigationBar;
