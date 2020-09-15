import React, {Suspense} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Team from "./Team";
import Technology from "./Catagories/Technology";
import Marketing from "./Catagories/Marketing";
import Design from "./Catagories/Design";
import Consulting from "./Catagories/Consulting";
import Student from "./Student";
import Organization from "./Organization";
import Spinner from "react-bootstrap/Spinner";
import "../App.css"

function NavigationBar() {
  return (
    <div style={{direction: "rtl" , fontSize: "34px"}}>
      <Router>
        <Navbar className="navbar" variant="dark" expand="lg" >
          {/*<Navbar.Brand>BGU Hack</Navbar.Brand>*/}
          <Nav className="ml-auto">
            <Nav.Link href="/Home">ראשי</Nav.Link>
            <Nav.Link href="/Student">סטודנטים</Nav.Link>
            <Nav.Link href="/Organization">ארגונים</Nav.Link>
            <Nav.Link href="/About">אודות</Nav.Link>
            <Nav.Link href="/Team">הצוות</Nav.Link>
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
          <Suspense fallback={<div style={{ textAlign: "center" }}><Spinner animation="border" variant="primary" /></div>}>

          <Route path="/Student">
            <Student />
          </Route>
          {/**/}
          {/*<Route path="/Organization">*/}
          {/*  <Organization />*/}
          {/*</Route>*/}
          <Route path='/Organization' component={() => {
            window.location.href = 'https://form.jotform.com/202582746873061';
            return null;
          }}/>
          <Route path="/Technology">
            <Technology />
          </Route>


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
      //
  );
}

export default NavigationBar;
