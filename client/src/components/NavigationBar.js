import React, {Suspense} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Team from "./Team";
import Technology from "./Catagories/Technology";
import Marketing from "./Catagories/Marketing";
import Design from "./Catagories/Design";
import Consulting from "./Catagories/Consulting";
import Student from "./Student";
import Organization from "./Organization";
import Spinner from "react-bootstrap/Spinner";
import ProjectTicket from "./ProjectTicket";

function NavigationBar() {
  return (
    <div>
      <Router>
        <Navbar bg="dark" variant="dark" >
          <Navbar.Brand>BGU Hack</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Team">Team</Nav.Link>
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
          <Route path="/Team">
            <Team />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>

          <Route path="/Student">
            <Student />
          </Route>

          <Route path="/Organization">
            <Organization />
          </Route>
          <Suspense fallback={<div style={{ textAlign: "center" }}><Spinner animation="border" variant="primary" /></div>}>
          <Route path="/Technology">
            <Technology />
          </Route>


          {/*<Suspense fallback={<div style={{ textAlign: "center" }}><Spinner animation="border" variant="primary" /></div>}>*/}
          <Route path="/Marketing">
            <Marketing/>
          </Route>


         <Route path="/Design">
            <Design />
          </Route>


          <Route path="/Consulting">
            <Consulting />
          </Route>
          </Suspense>
        </Switch>
      </Router>

    </div>
  );
}

export default NavigationBar;
