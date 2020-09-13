import React, { Suspense } from "react";
import Button from "react-bootstrap/esm/Button";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Technology from "./Catagories/Technology";
import ProjectTicket from "./ProjectTicket";

function Projects() {
  return (
    <div>
      <Router>
      </Router>
      <h1>Projects</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectTicket />
      </Suspense>
    </div>
  );
}

export default Projects;
